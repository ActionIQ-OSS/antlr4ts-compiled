"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const Decorators_1 = require("../../Decorators");
const Token_1 = require("../../Token");
/**
 * A {@link Token} object representing an entire subtree matched by a parser
 * rule; e.g., {@code <expr>}. These tokens are created for {@link TagChunk}
 * chunks where the tag corresponds to a parser rule.
 */
let RuleTagToken = class RuleTagToken {
    /**
     * Constructs a new instance of {@link RuleTagToken} with the specified rule
     * name, bypass token type, and label.
     *
     * @param ruleName The name of the parser rule this rule tag matches.
     * @param bypassTokenType The bypass token type assigned to the parser rule.
     * @param label The label associated with the rule tag, or {@code null} if
     * the rule tag is unlabeled.
     *
     * @exception IllegalArgumentException if {@code ruleName} is {@code null}
     * or empty.
     */
    constructor(ruleName, bypassTokenType, label) {
        if (ruleName == null || ruleName.length === 0) {
            throw new Error("ruleName cannot be null or empty.");
        }
        this._ruleName = ruleName;
        this.bypassTokenType = bypassTokenType;
        this._label = label;
    }
    /**
     * Gets the name of the rule associated with this rule tag.
     *
     * @return The name of the parser rule associated with this rule tag.
     */
    get ruleName() {
        return this._ruleName;
    }
    /**
     * Gets the label associated with the rule tag.
     *
     * @return The name of the label associated with the rule tag, or
     * {@code null} if this is an unlabeled rule tag.
     */
    get label() {
        return this._label;
    }
    /**
     * {@inheritDoc}
     *
     * <p>Rule tag tokens are always placed on the {@link #DEFAULT_CHANNEL}.</p>
     */
    get channel() {
        return Token_1.Token.DEFAULT_CHANNEL;
    }
    /**
     * {@inheritDoc}
     *
     * <p>This method returns the rule tag formatted with {@code <} and {@code >}
     * delimiters.</p>
     */
    get text() {
        if (this._label != null) {
            return "<" + this._label + ":" + this._ruleName + ">";
        }
        return "<" + this._ruleName + ">";
    }
    /**
     * {@inheritDoc}
     *
     * <p>Rule tag tokens have types assigned according to the rule bypass
     * transitions created during ATN deserialization.</p>
     */
    get type() {
        return this.bypassTokenType;
    }
    /**
     * {@inheritDoc}
     *
     * <p>The implementation for {@link RuleTagToken} always returns 0.</p>
     */
    get line() {
        return 0;
    }
    /**
     * {@inheritDoc}
     *
     * <p>The implementation for {@link RuleTagToken} always returns -1.</p>
     */
    get charPositionInLine() {
        return -1;
    }
    /**
     * {@inheritDoc}
     *
     * <p>The implementation for {@link RuleTagToken} always returns -1.</p>
     */
    get tokenIndex() {
        return -1;
    }
    /**
     * {@inheritDoc}
     *
     * <p>The implementation for {@link RuleTagToken} always returns -1.</p>
     */
    get startIndex() {
        return -1;
    }
    /**
     * {@inheritDoc}
     *
     * <p>The implementation for {@link RuleTagToken} always returns -1.</p>
     */
    get stopIndex() {
        return -1;
    }
    /**
     * {@inheritDoc}
     *
     * <p>The implementation for {@link RuleTagToken} always returns {@code null}.</p>
     */
    get tokenSource() {
        return undefined;
    }
    /**
     * {@inheritDoc}
     *
     * <p>The implementation for {@link RuleTagToken} always returns {@code null}.</p>
     */
    get inputStream() {
        return undefined;
    }
    /**
     * {@inheritDoc}
     *
     * <p>The implementation for {@link RuleTagToken} returns a string of the form
     * {@code ruleName:bypassTokenType}.</p>
     */
    toString() {
        return this._ruleName + ":" + this.bypassTokenType;
    }
};
__decorate([
    Decorators_1.NotNull
], RuleTagToken.prototype, "ruleName", null);
__decorate([
    Decorators_1.Override
], RuleTagToken.prototype, "channel", null);
__decorate([
    Decorators_1.Override
], RuleTagToken.prototype, "text", null);
__decorate([
    Decorators_1.Override
], RuleTagToken.prototype, "type", null);
__decorate([
    Decorators_1.Override
], RuleTagToken.prototype, "line", null);
__decorate([
    Decorators_1.Override
], RuleTagToken.prototype, "charPositionInLine", null);
__decorate([
    Decorators_1.Override
], RuleTagToken.prototype, "tokenIndex", null);
__decorate([
    Decorators_1.Override
], RuleTagToken.prototype, "startIndex", null);
__decorate([
    Decorators_1.Override
], RuleTagToken.prototype, "stopIndex", null);
__decorate([
    Decorators_1.Override
], RuleTagToken.prototype, "tokenSource", null);
__decorate([
    Decorators_1.Override
], RuleTagToken.prototype, "inputStream", null);
__decorate([
    Decorators_1.Override
], RuleTagToken.prototype, "toString", null);
RuleTagToken = __decorate([
    __param(0, Decorators_1.NotNull)
], RuleTagToken);
exports.RuleTagToken = RuleTagToken;
//# sourceMappingURL=RuleTagToken.js.map