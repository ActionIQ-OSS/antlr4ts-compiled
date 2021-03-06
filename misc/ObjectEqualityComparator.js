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
const Decorators_1 = require("../Decorators");
/**
 * This default implementation of {@link EqualityComparator} uses object equality
 * for comparisons by calling {@link Object#hashCode} and {@link Object#equals}.
 *
 * @author Sam Harwell
 */
class ObjectEqualityComparator {
    /**
     * {@inheritDoc}
     *
     * <p>This implementation returns
     * {@code obj.}{@link Object#hashCode hashCode()}.</p>
     */
    hashCode(obj) {
        if (obj == null) {
            return 0;
        }
        return obj.hashCode();
    }
    /**
     * {@inheritDoc}
     *
     * <p>This implementation relies on object equality. If both objects are
     * {@code null}, this method returns {@code true}. Otherwise if only
     * {@code a} is {@code null}, this method returns {@code false}. Otherwise,
     * this method returns the result of
     * {@code a.}{@link Object#equals equals}{@code (b)}.</p>
     */
    equals(a, b) {
        if (a == null) {
            return b == null;
        }
        return a.equals(b);
    }
}
ObjectEqualityComparator.INSTANCE = new ObjectEqualityComparator();
__decorate([
    Decorators_1.Override
], ObjectEqualityComparator.prototype, "hashCode", null);
__decorate([
    Decorators_1.Override
], ObjectEqualityComparator.prototype, "equals", null);
exports.ObjectEqualityComparator = ObjectEqualityComparator;
//# sourceMappingURL=ObjectEqualityComparator.js.map