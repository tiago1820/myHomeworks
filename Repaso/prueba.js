function Node(valor) {
    this.valor = valor;
    this.siguiente = null;
}

function LinkedList() {
    this.cabeza = null;
}

LinkedList.prototype.add = function (valor) {
    let nuevoNodo = new Node(valor);

    if (this.cabeza === null) {
        this.cabeza = nuevoNodo;
    } else {
        let actual = this.cabeza;
        while (actual.siguiente !== null) {
            actual = actual.siguiente;
        }
        actual.siguiente = nuevoNodo;
    }
}

//{valor:10,sig:{valor:15,sig:{valor:20,sig:{valor:25,sig:{valor:30,sig:null}}}}}
LinkedList.prototype.remove = function () {
    if (this.cabeza === null) {
        return null;
    } else if (this.cabeza.siguiente === null) {
        let valorRemovido = this.cabeza.valor;
        this.cabeza = null;
        return valorRemovido;
    } else {
        let actual = this.cabeza;//{valor:10,sig:nodo}
        let anterior = null;
        while (actual.siguiente !== null) {
            anterior = actual;//{valor:10,sig:nodo}
            actual = actual.siguiente;//{valor:15,sig:null}
        }

        anterior.siguiente = null;//{valor:10,sig:null}
        return actual.valor;//15
    }
}

//{valor:10,sig:{valor:15,sig:{valor:20,sig:{valor:25,sig:{valor:30,sig:null}}}}}
LinkedList.prototype.search = function (param) {//
    if (this.cabeza === null) {
        return null;
    } else {
        let actual = this.cabeza;//{valor:10,seg:nodo}
        if (typeof param === 'function') {
            while (actual !== null) {
                if (param(actual.valor) === true) {//
                    return actual.valor;
                }
                actual = actual.siguiente;//null
            }
        } else {
            while (actual !== null) {
                if (actual.valor === param) {
                    return actual.valor;
                }
                actual = actual.siguiente;
            }
        }
        return null;
    }
}

function isEven(n){
    return n % 2 === 0;
}

let lista = new LinkedList();
lista.add(10)
lista.add(15)
lista.add(20)
lista.add(25)

console.log(lista.search(25))