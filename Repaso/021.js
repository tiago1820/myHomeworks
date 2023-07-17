function HashTable() {
    this.numBuckets = 35;
    this.buckets = new Array(this.numBuckets);
}

HashTable.prototype.hash = function (key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i);
    }
    return hashValue % this.numBuckets;
}

HashTable.prototype.set = function (key, value) {
    if (typeof key !== "string") {
        throw new TypeError();
    }

    let index = this.hash(key);

    if (!this.buckets[index]) {
        this.buckets[index] = [];
    }

    let bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            bucket[i][1] = value;
            return;
        }
    }

    bucket.push([key, value]);
}

HashTable.prototype.get = function (key) {//instructora
    let index = this.hash(key);

    if (!this.buckets[index]) {
        return undefined;
    }

    let bucket = this.buckets[index];
    console.log(bucket)

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {//['instr', 'Ani']
            console.log(bucket[i][0])

            return bucket[i][1];
        }
    }

    return undefined;
}

HashTable.prototype.hasKey = function (key) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
        return false;
    }

    let bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            return true;
        }
    }

    return false;
}