/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { Parser } from '../Parser';
import { ParserRuleContext } from "../ParserRuleContext";
import { ParseTree } from "./ParseTree";
/** A set of utility routines useful for all kinds of ANTLR trees. */
export declare class Trees {
    /** Print out a whole tree in LISP form. {@link #getNodeText} is used on the
     *  node payloads to get the text for the nodes.  Detect
     *  parse trees and extract data appropriately.
     */
    /** Print out a whole tree in LISP form. {@link #getNodeText} is used on the
     *  node payloads to get the text for the nodes.  Detect
     *  parse trees and extract data appropriately.
     */
    /** Print out a whole tree in LISP form. {@link #getNodeText} is used on the
     *  node payloads to get the text for the nodes.
     */
    static toStringTree(t: ParseTree, arg2?: Parser | string[]): string;
    static getNodeText(t: ParseTree, arg2: Parser | string[]): string;
    /** Return ordered list of all children of this node */
    static getChildren(t: ParseTree): ParseTree[];
    /** Return a list of all ancestors of this node.  The first node of
     *  list is the root and the last is the parent of this node.
     *
     *  @since 4.5.1
     */
    static getAncestors(t: ParseTree): ParseTree[];
    /** Return true if t is u's parent or a node on path to root from u.
     *  Use == not equals().
     *
     *  @since 4.5.1
     */
    static isAncestorOf(t: ParseTree, u: ParseTree): boolean;
    static findAllTokenNodes(t: ParseTree, ttype: number): Array<ParseTree>;
    static findAllRuleNodes(t: ParseTree, ruleIndex: number): Array<ParseTree>;
    static findAllNodes(t: ParseTree, index: number, findTokens: boolean): Array<ParseTree>;
    static _findAllNodes(t: ParseTree, index: number, findTokens: boolean, nodes: Array<ParseTree>): void;
    /** Get all descendents; includes t itself.
     *
     * @since 4.5.1
     */
    static getDescendants(t: ParseTree): ParseTree[];
    /** Find smallest subtree of t enclosing range startTokenIndex..stopTokenIndex
    *  inclusively using postorder traversal.  Recursive depth-first-search.
    *
    *  @since 4.5
    */
    static getRootOfSubtreeEnclosingRegion(t: ParseTree, startTokenIndex: number, stopTokenIndex: number): ParserRuleContext | undefined;
    /** Replace any subtree siblings of root that are completely to left
    *  or right of lookahead range with a CommonToken(Token.INVALID_TYPE,"...")
    *  node. The source interval for t is not altered to suit smaller range!
    *
    *  WARNING: destructive to t.
    *
    *  @since 4.5.1
    */
    static stripChildrenOutOfRange(t: ParserRuleContext, root: ParserRuleContext, startIndex: number, stopIndex: number): void;
}
