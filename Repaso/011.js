// closures
function counter(){
    let count = 0;

    return function(){
        count++;
        return count;
    }
}

const nuevoContador = counter()
console.log(nuevoContador())