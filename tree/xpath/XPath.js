"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ConvertTo-TS run at 2016-10-04T11:26:46.4373888-07:00
const ANTLRInputStream_1 = require("../../ANTLRInputStream");
const CommonTokenStream_1 = require("../../CommonTokenStream");
const LexerNoViableAltException_1 = require("../../LexerNoViableAltException");
const ParserRuleContext_1 = require("../../ParserRuleContext");
const Token_1 = require("../../Token");
const XPathLexer_1 = require("./XPathLexer");
const XPathLexerErrorListener_1 = require("./XPathLexerErrorListener");
const XPathRuleAnywhereElement_1 = require("./XPathRuleAnywhereElement");
const XPathRuleElement_1 = require("./XPathRuleElement");
const XPathTokenAnywhereElement_1 = require("./XPathTokenAnywhereElement");
const XPathTokenElement_1 = require("./XPathTokenElement");
const XPathWildcardAnywhereElement_1 = require("./XPathWildcardAnywhereElement");
const XPathWildcardElement_1 = require("./XPathWildcardElement");
/**
 * Represent a subset of XPath XML path syntax for use in identifying nodes in
 * parse trees.
 *
 * <p>
 * Split path into words and separators {@code /} and {@code //} via ANTLR
 * itself then walk path elements from left to right. At each separator-word
 * pair, find set of nodes. Next stage uses those as work list.</p>
 *
 * <p>
 * The basic interface is
 * {@link XPath#findAll ParseTree.findAll}{@code (tree, pathString, parser)}.
 * But that is just shorthand for:</p>
 *
 * <pre>
 * {@link XPath} p = new {@link XPath#XPath XPath}(parser, pathString);
 * return p.{@link #evaluate evaluate}(tree);
 * </pre>
 *
 * <p>
 * See {@code org.antlr.v4.test.TestXPath} for descriptions. In short, this
 * allows operators:</p>
 *
 * <dl>
 * <dt>/</dt> <dd>root</dd>
 * <dt>//</dt> <dd>anywhere</dd>
 * <dt>!</dt> <dd>invert; this must appear directly after root or anywhere
 * operator</dd>
 * </dl>
 *
 * <p>
 * and path elements:</p>
 *
 * <dl>
 * <dt>ID</dt> <dd>token name</dd>
 * <dt>'string'</dt> <dd>any string literal token from the grammar</dd>
 * <dt>expr</dt> <dd>rule name</dd>
 * <dt>*</dt> <dd>wildcard matching any node</dd>
 * </dl>
 *
 * <p>
 * Whitespace is not allowed.</p>
 */
class XPath {
    constructor(parser, path) {
        this.parser = parser;
        this.path = path;
        this.elements = this.split(path);
        //		System.out.println(Arrays.toString(elements));
    }
    // TODO: check for invalid token/rule names, bad syntax
    split(path) {
        let input = new ANTLRInputStream_1.ANTLRInputStream(path);
        let lexer = new XPathLexer_1.XPathLexer(input);
        lexer.recover = (e) => { throw e; };
        lexer.removeErrorListeners();
        lexer.addErrorListener(new XPathLexerErrorListener_1.XPathLexerErrorListener());
        let tokenStream = new CommonTokenStream_1.CommonTokenStream(lexer);
        try {
            tokenStream.fill();
        }
        catch (e) {
            if (e instanceof LexerNoViableAltException_1.LexerNoViableAltException) {
                let pos = lexer.charPositionInLine;
                let msg = "Invalid tokens or characters at index " + pos + " in path '" + path + "' -- " + e.message;
                throw new RangeError(msg);
            }
            throw e;
        }
        let tokens = tokenStream.getTokens();
        //		System.out.println("path="+path+"=>"+tokens);
        let elements = [];
        let n = tokens.length;
        let i = 0;
        loop: while (i < n) {
            let el = tokens[i];
            let next;
            switch (el.type) {
                case XPathLexer_1.XPathLexer.ROOT:
                case XPathLexer_1.XPathLexer.ANYWHERE:
                    let anywhere = el.type === XPathLexer_1.XPathLexer.ANYWHERE;
                    i++;
                    next = tokens[i];
                    let invert = next.type === XPathLexer_1.XPathLexer.BANG;
                    if (invert) {
                        i++;
                        next = tokens[i];
                    }
                    let pathElement = this.getXPathElement(next, anywhere);
                    pathElement.invert = invert;
                    elements.push(pathElement);
                    i++;
                    break;
                case XPathLexer_1.XPathLexer.TOKEN_REF:
                case XPathLexer_1.XPathLexer.RULE_REF:
                case XPathLexer_1.XPathLexer.WILDCARD:
                    elements.push(this.getXPathElement(el, false));
                    i++;
                    break;
                case Token_1.Token.EOF:
                    break loop;
                default:
                    throw new Error("Unknowth path element " + el);
            }
        }
        return elements;
    }
    /**
     * Convert word like {@code *} or {@code ID} or {@code expr} to a path
     * element. {@code anywhere} is {@code true} if {@code //} precedes the
     * word.
     */
    getXPathElement(wordToken, anywhere) {
        if (wordToken.type == Token_1.Token.EOF) {
            throw new Error("Missing path element at end of path");
        }
        let word = wordToken.text;
        if (word == null) {
            throw new Error("Expected wordToken to have text content.");
        }
        let ttype = this.parser.getTokenType(word);
        let ruleIndex = this.parser.getRuleIndex(word);
        switch (wordToken.type) {
            case XPathLexer_1.XPathLexer.WILDCARD:
                return anywhere ?
                    new XPathWildcardAnywhereElement_1.XPathWildcardAnywhereElement() :
                    new XPathWildcardElement_1.XPathWildcardElement();
            case XPathLexer_1.XPathLexer.TOKEN_REF:
            case XPathLexer_1.XPathLexer.STRING:
                if (ttype === Token_1.Token.INVALID_TYPE) {
                    throw new Error(word + " at index " +
                        wordToken.startIndex +
                        " isn't a valid token name");
                }
                return anywhere ?
                    new XPathTokenAnywhereElement_1.XPathTokenAnywhereElement(word, ttype) :
                    new XPathTokenElement_1.XPathTokenElement(word, ttype);
            default:
                if (ruleIndex == -1) {
                    throw new Error(word + " at index " +
                        wordToken.startIndex +
                        " isn't a valid rule name");
                }
                return anywhere ?
                    new XPathRuleAnywhereElement_1.XPathRuleAnywhereElement(word, ruleIndex) :
                    new XPathRuleElement_1.XPathRuleElement(word, ruleIndex);
        }
    }
    static findAll(tree, xpath, parser) {
        let p = new XPath(parser, xpath);
        return p.evaluate(tree);
    }
    /**
     * Return a list of all nodes starting at {@code t} as root that satisfy the
     * path. The root {@code /} is relative to the node passed to
     * {@link #evaluate}.
     */
    evaluate(t) {
        let dummyRoot = new ParserRuleContext_1.ParserRuleContext();
        dummyRoot.addChild(t);
        let work = [dummyRoot];
        let i = 0;
        while (i < this.elements.length) {
            let next = []; // WAS LinkedHashSet<ParseTree>
            for (let node of work) {
                if (node.childCount > 0) {
                    // only try to match next element if it has children
                    // e.g., //func/*/stat might have a token node for which
                    // we can't go looking for stat nodes.
                    let matching = this.elements[i].evaluate(node);
                    next = next.concat(matching);
                }
            }
            i++;
            work = next;
        }
        return work;
    }
}
XPath.WILDCARD = "*"; // word not operator/separator
XPath.NOT = "!"; // word for invert operator
exports.XPath = XPath;
//# sourceMappingURL=XPath.js.map