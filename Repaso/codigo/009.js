function Queue() {
    this.queue = [];
}

Queue.prototype.enqueue = function(value){
    this.queue.push(value);
    return "Valor agregado \n" + value;
}

Queue.prototype.dequeue = function(){
    let valueRemoved = this.queue.shift();
    return "Valor removido \n" + valueRemoved;
}

Queue.prototype.size = function(){
    return this.queue.length;
}

let fila = new Queue();
fila.enqueue(5);
fila.enqueue(9);

console.log(fila);
console.log(fila.enqueue(8));
console.log(fila);
console.log(fila.dequeue());
console.log(fila);
console.log(fila.size());
