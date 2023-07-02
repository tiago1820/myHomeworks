let menu = [
    { nombre: 'Dark Chocolate', precio: '1.00' },
    { nombre: 'Dark Chocolate & Almond', precio: '1.50' },
    { nombre: 'Milk Chocolate & Sprinkles', precio: '3.00' },
    { nombre: 'Coconut & Cream', precio: '3.00' },
    { nombre: 'Dark Chocolate & Pistachio', precio: '3.00' }
];

function nuevoElemento(tagName, className) {
    const elemento = document.createElement(tagName);
    if (className) elemento.className = className;
    return elemento;
}

function Section(menu) {
    this.elemento = nuevoElemento('section', '');
    const h2 = nuevoElemento('h2', '');
    h2.innerHTML = 'Classic Assortment';
    const img = nuevoElemento('img', '');
    img.setAttribute('src', 'images/brigadeiro2.png');
    img.setAttribute('alt', 'brigadeiro icon');

    this.elemento.appendChild(h2);
    this.elemento.appendChild(img);

    for (let i = 0; i < menu.length; i++) {
        const article = nuevoElemento('article', 'item');
        const pFlavor = nuevoElemento('p', 'flavor');
        const pPrice = nuevoElemento('p', 'price');
        pFlavor.innerHTML = menu[i].nombre;
        pPrice.innerHTML = menu[i].precio;
        article.appendChild(pFlavor);
        article.appendChild(pPrice);
        this.elemento.appendChild(article);
    }

}

function Footer() {
    this.elemento = nuevoElemento('footer', '');

    const p = nuevoElemento('p', '');
    const a = nuevoElemento('a', '');
    a.innerHTML = 'Visit our website';
    a.setAttribute('href', 'www.brigadeiro.com');
    a.setAttribute('target', '_blank');
    p.appendChild(a);

    const pAddress = nuevoElemento('p', 'address');
    pAddress.innerHTML = '818 Waldemar Silveira';

    this.elemento.appendChild(p);
    this.elemento.appendChild(pAddress);

}

function Main() {
    this.elemento = nuevoElemento('div', 'main');

    const h1 = nuevoElemento('h1', '');
    h1.innerHTML = 'Luana Brigadeiros';
    this.elemento.appendChild(h1);

    const p = nuevoElemento('p', 'established');
    p.innerHTML = 'Est. 2021';
    this.elemento.appendChild(p);

    const hr = nuevoElemento('hr', '');
    this.elemento.appendChild(hr);

    const section = new Section(menu);
    this.elemento.appendChild(section.elemento);

}

function Elementos() {
    this.array = [new Main(), new Footer()];
}

function Menu() {
    const areaPrincipal = document.querySelector('.menu');
    const elementos = new Elementos();
    elementos.array.forEach(el => areaPrincipal.appendChild(el.elemento));

    const hr = nuevoElemento('hr', 'bottom-line');

}

new Menu();