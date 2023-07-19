function Barbol(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
//{value:10,left:{value:5,left:null,right:null},right:{value:15,left:{value:12,left:null,right:null},right:null}}
Barbol.prototype.insert = function (value) {//12
    if (value < this.value) {//12 < 15
        if (!this.left) {
            this.left = new Barbol(value);//{value:12,left:null,right:null}
        } else {
            this.left.insert(value);
        }
    } else if (value > this.value) {//12 > 10
        if (!this.right) {
            this.right = new Barbol(value);//{value:15,left:null,right:null}
        } else {
            this.right.insert(value);//12
        }
    }
}

Barbol.prototype.size = function () {
    let count = 1;

    if (this.left) {
        count += this.left.size();
    }

    if (this.right) {
        count += this.right.size();
    }

    return count;
}

//{value:10,left:{value:5,left:null,right:null},right:{value:15,left:{value:12,left:null,right:null},right:null}}
// 12
Barbol.prototype.contains = function (value) {//12
    if (this.value === value) {
        return true;
    } else if (value < this.value) {//
        if (this.left) {
            return this.left.contains(value);
        } else {
            return false;
        }
    } else {
        if (this.right) {
            return this.right.contains(value);
        } else {
            return false;
        }
    }
}

//{value:10,left:{value:5,left:null,right:null},right:{value:15,left:{value:12,left:null,right:null},right:null}}
Barbol.prototype.depthFirstForEach = function (order = "in-order", callback) {//post-order
    function preOrder(node, callback) {//
        if (node) {
            callback(node.value);
            preOrder(node.left, callback);
            preOrder(node.right, callback);
        }
    }

    function inOrder(node, callback) {//
        if (node) {
            inOrder(node.left, callback);
            callback(node.value);
            inOrder(node.right, callback);
        }
    }

    function postOrder(node, callback) {//5 12 15 10
        if (node) {
            postOrder(node.left, callback);//
            postOrder(node.right, callback);
            callback(node.value);
        }
    }

    if (order === "pre-order") {
        preOrder(this, callback);
    } else if (order === "in-order") {
        inOrder(this, callback);
    } else if (order === "post-order") {
        postOrder(this, callback);
    }

}

Barbol.prototype.breadthFirstForEach = function (callback) {
    const queue = [this];//

    while (queue.length > 0) {
        const node = queue.shift();//
        callback(node.value);
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
}

function saludar(valor) {
    console.log("Hola");
}

let arbol = new Barbol(10);
arbol.insert(15)
arbol.insert(5)
arbol.insert(12)
arbol.insert(2)

arbol.breadthFirstForEach(saludar)
