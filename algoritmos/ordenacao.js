function ArrayList() {
    let array = [];

    this.insert = function (item) {
        return array.push(item);
    }

    this.toString = function () {
        return array.join();
    }

    this.bubbleSort = function () {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1);
                }
            }
        }
    }

    this.selectionSort = function () {
        let indexMin;
        for (let i = 0; i < array.length - 1; i++) {
            indexMin = i;
            for (let j = i; j < array.length; j++) {
                if (array[indexMin] > array[j]) {// 
                    indexMin = j;
                }
            }
            if (i !== indexMin) {
                swap(array, i, indexMin);
            }
        }
    }
    this.insertSort = function () {
        let j, temp;
        for (let i = 1; i < array.length; i++) {
            j = i;
            temp = array[i];

            while (j > 0 && array[j - 1] > temp) {
                array[j] = array[j - 1];
                j--;
            }
            array[j] = temp;
        }
    }

    this.mergeSort = function () {
        array = mergeSortRec(array);
    }

    let mergeSortRec = function (array) {
        let length = array.length;
        if (length === 1) {
            return array;
        }

        let mid = Math.floor(length / 2);
        let left = array.slice(0, mid);
        let right = array.slice(mid, length);

        return merge(mergeSortRec(left), mergeSortRec(right));
    }

    let merge = function (left, right) {
        let result = [];
        il = 0;
        ir = 0;

        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        while (il < left.length) {
            result.push(left[il++]);
        }

        while (ir < right.length) {
            result.push(right[ir++]);
        }

        return result;
    }

    this.quickSort = function () {
        quick(array, 0, array.length - 1);
    }

    let quick = function (array, left, right) {
        let index;
        if (array.length > 1) {
            index = partition(array, left, right);
            if (left < index - 1) {
                quick(array, left, index - 1)
            }
            if (index < right) {
                quick(array, index, right)
            }
        }
    }

    var partition = function (array, left, right) {
        let pivot = array[Math.floor((right + left) / 2)];
        let i = left;
        let j = right;

        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }

            while (array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(array, i, j);
                i++;
                j--;
            }
        }

        return i;
    }

    let swap = function (array, index1, index2) {
        let aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    }

}

const ordem = new ArrayList();
ordem.insert(5);
ordem.insert(4);
ordem.insert(3);
ordem.insert(2);
ordem.insert(1);
ordem.quickSort();
console.log(ordem.toString());