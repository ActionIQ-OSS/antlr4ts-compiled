/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { EqualityComparator } from './EqualityComparator';
import { Equatable } from './Stubs';
/**
 * This default implementation of {@link EqualityComparator} uses object equality
 * for comparisons by calling {@link Object#hashCode} and {@link Object#equals}.
 *
 * @author Sam Harwell
 */
export declare class ObjectEqualityComparator implements EqualityComparator<Equatable | null | undefined> {
    static readonly INSTANCE: ObjectEqualityComparator;
    /**
     * {@inheritDoc}
     *
     * <p>This implementation returns
     * {@code obj.}{@link Object#hashCode hashCode()}.</p>
     */
    hashCode(obj: Equatable | null | undefined): number;
    /**
     * {@inheritDoc}
     *
     * <p>This implementation relies on object equality. If both objects are
     * {@code null}, this method returns {@code true}. Otherwise if only
     * {@code a} is {@code null}, this method returns {@code false}. Otherwise,
     * this method returns the result of
     * {@code a.}{@link Object#equals equals}{@code (b)}.</p>
     */
    equals(a: Equatable | null | undefined, b: Equatable | null | undefined): boolean;
}
