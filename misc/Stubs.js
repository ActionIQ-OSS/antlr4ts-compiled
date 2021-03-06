"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This adapter function allows Collection<T> arguments to be used in JavaScript for...of loops
 */
function asIterable(collection) {
    if (collection[Symbol.iterator])
        return collection;
    return new IterableAdapter(collection);
}
exports.asIterable = asIterable;
// implementation detail of above...
class IterableAdapter {
    constructor(collection) {
        this.collection = collection;
    }
    [Symbol.iterator]() { this._iterator = this.collection.iterator(); return this; }
    next() {
        if (!this._iterator.hasNext()) {
            // A bit of a hack needed here, tracking under https://github.com/Microsoft/TypeScript/issues/11375
            return { done: true, value: undefined };
        }
        return { done: false, value: this._iterator.next() };
    }
}
//# sourceMappingURL=Stubs.js.map