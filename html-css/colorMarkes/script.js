function nuevoElemento(tagName, ...classNames) {
    const elemento = document.createElement(tagName);
    if (classNames.length > 0) {
        elemento.classList.add(...classNames);
    }
    return elemento;
}

class Maker {
    constructor(...classNames) {
        this.elemento = nuevoElemento('div', ...classNames);
        this.cap = nuevoElemento('div', 'cap');
        this.sleeve = nuevoElemento('div', 'sleeve');
        this.elemento.appendChild(this.cap);
        this.elemento.appendChild(this.sleeve);
    }
}

class Container {
    constructor() {
        this.elemento = nuevoElemento('div', 'container');
        this.makers = [
            new Maker('marker', 'red'), 
            new Maker('marker', 'green'), 
            new Maker('marker', 'blue')
        ];

        this.makers.forEach(maker => this.elemento.appendChild(maker.elemento));

    }
}

class FullPage {
    constructor(){
        this.elemento = document.querySelector('body');
        this.h1 = nuevoElemento('h1', 'titulo');
        this.h1.innerHTML = 'CSS Color Markers';
        this.container = new Container();

        this.elementoExistente = document.querySelector('script');
        this.elemento = this.elementoExistente.parentNode;

        this.elemento.insertBefore(this.h1, this.elementoExistente);
        this.elemento.insertBefore(this.container.elemento, this.elementoExistente);

    }
}

new FullPage();