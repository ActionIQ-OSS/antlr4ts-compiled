"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Array2DHashSet_1 = require("./Array2DHashSet");
const Stubs_1 = require("./Stubs");
const DefaultEqualityComparator_1 = require("./DefaultEqualityComparator");
class MapKeyEqualityComparator {
    constructor(keyComparator) {
        this.keyComparator = keyComparator;
    }
    hashCode(obj) {
        return this.keyComparator.hashCode(obj.key);
    }
    equals(a, b) {
        return this.keyComparator.equals(a.key, b.key);
    }
}
class Array2DHashMap {
    constructor(keyComparer) {
        if (keyComparer instanceof Array2DHashMap) {
            this.backingStore = new Array2DHashSet_1.Array2DHashSet(keyComparer.backingStore);
        }
        else {
            this.backingStore = new Array2DHashSet_1.Array2DHashSet(new MapKeyEqualityComparator(keyComparer));
        }
    }
    clear() {
        this.backingStore.clear();
    }
    containsKey(key) {
        return this.backingStore.contains({ key });
    }
    containsValue(value) {
        return this.values().contains(value);
    }
    entrySet() {
        return new EntrySet(this, this.backingStore);
    }
    get(key) {
        let bucket = this.backingStore.get({ key });
        if (!bucket) {
            return undefined;
        }
        return bucket.value;
    }
    get isEmpty() {
        return this.backingStore.isEmpty;
    }
    keySet() {
        return new KeySet(this, this.backingStore);
    }
    put(key, value) {
        let element = this.backingStore.get({ key, value });
        let result;
        if (!element) {
            this.backingStore.add({ key, value });
        }
        else {
            result = element.value;
            element.value = value;
        }
        return result;
    }
    putIfAbsent(key, value) {
        let element = this.backingStore.get({ key, value });
        let result;
        if (!element) {
            this.backingStore.add({ key, value });
        }
        else {
            result = element.value;
        }
        return result;
    }
    putAll(m) {
        for (let entry of Stubs_1.asIterable(m.entrySet())) {
            this.put(entry.getKey(), entry.getValue());
        }
    }
    remove(key) {
        let value = this.get(key);
        this.backingStore.remove({ key });
        return value;
    }
    get size() {
        return this.backingStore.size;
    }
    values() {
        return new ValueCollection(this, this.backingStore);
    }
    hashCode() {
        return this.backingStore.hashCode();
    }
    equals(o) {
        if (!(o instanceof Array2DHashMap)) {
            return false;
        }
        return this.backingStore.equals(o.backingStore);
    }
}
exports.Array2DHashMap = Array2DHashMap;
class EntrySet {
    constructor(map, backingStore) {
        this.map = map;
        this.backingStore = backingStore;
    }
    add(e) {
        throw new Error("Not implemented");
    }
    addAll(collection) {
        throw new Error("Not implemented");
    }
    clear() {
        this.map.clear();
    }
    contains(o) {
        throw new Error("Not implemented");
    }
    containsAll(collection) {
        for (let key of Stubs_1.asIterable(collection)) {
            if (!this.contains(key)) {
                return false;
            }
        }
        return true;
    }
    equals(o) {
        if (o === this) {
            return true;
        }
        else if (!(o instanceof EntrySet)) {
            return false;
        }
        return this.backingStore.equals(o.backingStore);
    }
    hashCode() {
        return this.backingStore.hashCode();
    }
    get isEmpty() {
        return this.backingStore.isEmpty;
    }
    iterator() {
        throw new Error("Not implemented");
    }
    remove(o) {
        throw new Error("Not implemented");
    }
    removeAll(collection) {
        let removedAny = false;
        for (let key of Stubs_1.asIterable(collection)) {
            removedAny = this.remove(key) || removedAny;
        }
        return removedAny;
    }
    retainAll(collection) {
        throw new Error("Not implemented");
    }
    get size() {
        return this.backingStore.size;
    }
    toArray(a) {
        throw new Error("Not implemented");
    }
}
class KeySet {
    constructor(map, backingStore) {
        this.map = map;
        this.backingStore = backingStore;
    }
    add(e) {
        throw new Error("Not supported");
    }
    addAll(collection) {
        throw new Error("Not supported");
    }
    clear() {
        this.map.clear();
    }
    contains(o) {
        return this.backingStore.contains({ key: o });
    }
    containsAll(collection) {
        for (let key of Stubs_1.asIterable(collection)) {
            if (!this.contains(key)) {
                return false;
            }
        }
        return true;
    }
    equals(o) {
        if (o === this) {
            return true;
        }
        else if (!(o instanceof KeySet)) {
            return false;
        }
        return this.backingStore.equals(o.backingStore);
    }
    hashCode() {
        return this.backingStore.hashCode();
    }
    get isEmpty() {
        return this.backingStore.isEmpty;
    }
    iterator() {
        throw new Error("Not implemented");
    }
    remove(o) {
        return this.backingStore.remove({ key: o });
    }
    removeAll(collection) {
        let removedAny = false;
        for (let key of Stubs_1.asIterable(collection)) {
            removedAny = this.remove(key) || removedAny;
        }
        return removedAny;
    }
    retainAll(collection) {
        throw new Error("Not implemented");
    }
    get size() {
        return this.backingStore.size;
    }
    toArray(a) {
        throw new Error("Not implemented");
    }
}
class ValueCollection {
    constructor(map, backingStore) {
        this.map = map;
        this.backingStore = backingStore;
    }
    add(e) {
        throw new Error("Not supported");
    }
    addAll(collection) {
        throw new Error("Not supported");
    }
    clear() {
        this.map.clear();
    }
    contains(o) {
        for (let bucket of Stubs_1.asIterable(this.backingStore)) {
            if (DefaultEqualityComparator_1.DefaultEqualityComparator.INSTANCE.equals(o, bucket.value)) {
                return true;
            }
        }
        return false;
    }
    containsAll(collection) {
        for (let key of Stubs_1.asIterable(collection)) {
            if (!this.contains(key)) {
                return false;
            }
        }
        return true;
    }
    equals(o) {
        if (o === this) {
            return true;
        }
        else if (!(o instanceof ValueCollection)) {
            return false;
        }
        return this.backingStore.equals(o.backingStore);
    }
    hashCode() {
        return this.backingStore.hashCode();
    }
    get isEmpty() {
        return this.backingStore.isEmpty;
    }
    iterator() {
        let delegate = this.backingStore.iterator();
        return {
            hasNext() {
                return delegate.hasNext();
            },
            next() {
                return delegate.next().value;
            },
            remove() {
                throw new Error("Not supported");
            }
        };
    }
    remove(o) {
        throw new Error("Not implemented");
    }
    removeAll(collection) {
        let removedAny = false;
        for (let key of Stubs_1.asIterable(collection)) {
            removedAny = this.remove(key) || removedAny;
        }
        return removedAny;
    }
    retainAll(collection) {
        throw new Error("Not implemented");
    }
    get size() {
        return this.backingStore.size;
    }
    toArray(a) {
        if (a === undefined || a.length < this.backingStore.size) {
            a = new Array(this.backingStore.size);
        }
        let i = 0;
        for (let bucket of Stubs_1.asIterable(this.backingStore)) {
            a[i++] = bucket.value;
        }
        return a;
    }
}
//# sourceMappingURL=Array2DHashMap.js.map