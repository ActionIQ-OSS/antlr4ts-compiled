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
Object.defineProperty(exports, "__esModule", { value: true });
// ConvertTo-TS run at 2016-10-04T11:26:46.1670669-07:00
const Chunk_1 = require("./Chunk");
const Decorators_1 = require("../../Decorators");
/**
 * Represents a placeholder tag in a tree pattern. A tag can have any of the
 * following forms.
 *
 * <ul>
 * <li>{@code expr}: An unlabeled placeholder for a parser rule {@code expr}.</li>
 * <li>{@code ID}: An unlabeled placeholder for a token of type {@code ID}.</li>
 * <li>{@code e:expr}: A labeled placeholder for a parser rule {@code expr}.</li>
 * <li>{@code id:ID}: A labeled placeholder for a token of type {@code ID}.</li>
 * </ul>
 *
 * This class does not perform any validation on the tag or label names aside
 * from ensuring that the tag is a non-null, non-empty string.
 */
class TagChunk extends Chunk_1.Chunk {
    /**
     * Construct a new instance of {@link TagChunk} using the specified label
     * and tag.
     *
     * @param label The label for the tag. If this is {@code null}, the
     * {@link TagChunk} represents an unlabeled tag.
     * @param tag The tag, which should be the name of a parser rule or token
     * type.
     *
     * @exception IllegalArgumentException if {@code tag} is {@code null} or
     * empty.
     */
    constructor(tag, label) {
        super();
        if (tag == null || tag.length === 0) {
            throw new Error("tag cannot be null or empty");
        }
        this._tag = tag;
        this._label = label;
    }
    /**
     * Get the tag for this chunk.
     *
     * @return The tag for the chunk.
     */
    get tag() {
        return this._tag;
    }
    /**
     * Get the label, if any, assigned to this chunk.
     *
     * @return The label assigned to this chunk, or {@code null} if no label is
     * assigned to the chunk.
     */
    get label() {
        return this._label;
    }
    /**
     * This method returns a text representation of the tag chunk. Labeled tags
     * are returned in the form {@code label:tag}, and unlabeled tags are
     * returned as just the tag name.
     */
    toString() {
        if (this._label != null) {
            return this._label + ":" + this._tag;
        }
        return this._tag;
    }
}
__decorate([
    Decorators_1.NotNull
], TagChunk.prototype, "tag", null);
__decorate([
    Decorators_1.Override
], TagChunk.prototype, "toString", null);
exports.TagChunk = TagChunk;
//# sourceMappingURL=TagChunk.js.map