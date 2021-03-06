"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ParseTreeProperty {
    constructor(name = "ParseTreeProperty") {
        this._symbol = Symbol(name);
    }
    get(node) {
        return node[this._symbol];
    }
    set(node, value) {
        node[this._symbol] = value;
    }
    removeFrom(node) {
        let result = node[this._symbol];
        delete node[this._symbol];
        return result;
    }
}
exports.ParseTreeProperty = ParseTreeProperty;
//# sourceMappingURL=ParseTreeProperty.js.map