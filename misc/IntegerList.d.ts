/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { JavaCollection } from './Stubs';
/**
 *
 * @author Sam Harwell
 */
export declare class IntegerList {
    private _data;
    private _size;
    constructor(arg?: number | IntegerList | Iterable<number>);
    add(value: number): void;
    addAll(list: number[] | IntegerList | JavaCollection<number>): void;
    get(index: number): number;
    contains(value: number): boolean;
    set(index: number, value: number): number;
    removeAt(index: number): number;
    removeRange(fromIndex: number, toIndex: number): void;
    readonly isEmpty: boolean;
    readonly size: number;
    trimToSize(): void;
    clear(): void;
    toArray(): number[];
    sort(): void;
    /**
     * Compares the specified object with this list for equality.  Returns
     * {@code true} if and only if the specified object is also an {@link IntegerList},
     * both lists have the same size, and all corresponding pairs of elements in
     * the two lists are equal.  In other words, two lists are defined to be
     * equal if they contain the same elements in the same order.
     * <p>
     * This implementation first checks if the specified object is this
     * list. If so, it returns {@code true}; if not, it checks if the
     * specified object is an {@link IntegerList}. If not, it returns {@code false};
     * if so, it checks the size of both lists. If the lists are not the same size,
     * it returns {@code false}; otherwise it iterates over both lists, comparing
     * corresponding pairs of elements.  If any comparison returns {@code false},
     * this method returns {@code false}.
     *
     * @param o the object to be compared for equality with this list
     * @return {@code true} if the specified object is equal to this list
     */
    equals(o: any): boolean;
    /**
     * Returns the hash code value for this list.
     *
     * <p>This implementation uses exactly the code that is used to define the
     * list hash function in the documentation for the {@link List#hashCode}
     * method.</p>
     *
     * @return the hash code value for this list
     */
    hashCode(): number;
    /**
     * Returns a string representation of this list.
     */
    toString(): string;
    binarySearch(key: number, fromIndex?: number, toIndex?: number): number;
    private ensureCapacity(capacity);
}
