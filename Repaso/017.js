function Queue() {
    this.fila = [];
    this.length = 0;
}

Queue.prototype.enqueue = function(value){
    this.fila.push(value);
    this.length++;
}

Queue.prototype.dequeue = function(){
    this.fila.shift();
    this.length--;
}

Queue.prototype.size = function(){
    return this.size;
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
console.log(queue);