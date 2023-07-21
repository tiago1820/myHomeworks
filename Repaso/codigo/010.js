function Node(valor) {
    this.valor = valor;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

//{valor:10,next:{valor:15,next:{valor:20,next:null}}}
LinkedList.prototype.add = function (valor) {//20
    if (this.head === null) {//false
        this.head = new Node(valor);
    } else {
        let current = this.head;//{valor:10,next:Nodo}
        while (current.next !== null) {
            current = current.next;//{valor:15, next:null}
        }
        current.next = new Node(valor);//{valor:15,next:{valor:20,next:null}}
    }

}

//{valor:10,next:{valor:15,next:{valor:20,next:null}}}
LinkedList.prototype.remove = function () {
    if (this.head === null) {
        return null;
    }

    if (this.head.next === null) {
        let valorRemovido = this.head.valor;
        this.head = null;
        return valorRemovido;
    } else {
        let current = this.head.next;
        let anterior = null;
        while (current.next !== null) {
            anterior = current;
            current = current.next;
        }

        anterior.next = null;
        return current.valor;
    }

}

LinkedList.prototype.search = function (param) {
    if (this.head === null) {
        return null;
    } else {
        let current = this.head;
        if (typeof param === 'function') {
            while (current !== null) {
                if (param(current.valor)) {
                    return current.valor;
                }
                current = current.next;
            }
        } else {
            while (current !== null) {
                if (current.valor === param) {
                    return current.valor
                }
                current = current.next;
            }
        }
    }
    return null;
}

function isEven(n){
    return n % 2 === 0;
}

let lista = new LinkedList();
lista.add(10);
lista.add(15);
lista.add(20);
lista.add(23);
lista.add(25);
console.log(lista.search(25));
console.log(lista)