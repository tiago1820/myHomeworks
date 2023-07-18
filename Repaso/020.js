function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function (value) {
    let newNode = new Node(value);

    if (this.head === null) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
}

LinkedList.prototype.remove = function () {
    // Si la lista está vacía, no hay nada que eliminar, retornamos undefined.
    // Si la lista tiene un solo nodo, eliminamos ese nodo y actualizamos la cabeza.
    // Si la lista tiene más de un nodo, recorremos hasta el penúltimo nodo y eliminamos el último nodo.

    if (this.head === null) {
        return undefined;
    }

    let removedValue;

    if (this.head.next === null) {
        removedValue = this.head.value;
        this.head = null;
    } else {
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        removedValue = current.next.value;
        current.next = null;
    }

    return removedValue;

}

LinkedList.prototype.search = function (param) {
    // Si la lista está vacía, retornamos null.
    // Si el parámetro es una función (callback), buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true.
    // Si el parámetro es un valor, buscamos un nodo cuyo valor coincida con lo buscado.
    // Si no se encuentra ningún nodo que cumpla con la búsqueda, retornamos null.
    if (this.head === null) {
        return null;
    }

    if (typeof param === 'function') {
        let current = this.head;
        while (current !== null) {
            if (param(current.value)) {
                return current.value;
            }
            current = current.next;
        }
    } else {
        let current = this.head;
        while (current !== null) {
            if (current.value === param) {
                return current.value;
            }
            current = current.next;
        }
    }

    return null;
}