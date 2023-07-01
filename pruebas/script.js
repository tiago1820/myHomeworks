function novoElemento(tagName, className) {
    const elem = document.createElement(tagName);
    elem.className = className;
    return elem;
}

function Tab(ciudades) {

    this.elemento = novoElemento('div', 'tab');

    for (let i = 0; i < ciudades.length; i++) {
        this.i = new Button();
        this.elemento.appendChild(this.i.elemento);
        this.i.setOnClick(`openCity(event, '${ciudades[i].nombre}')`);
        this.i.setCity(ciudades[i].nombre);
        if(i === 0){
            this.i.elemento.setAttribute('id', 'defaultOpen');  
        };
    }

}

function Button() {
    this.elemento = novoElemento('button', 'tablinks');
    this.setOnClick = funcion => this.elemento.setAttribute("onclick", funcion);
    this.setCity = city => this.elemento.innerHTML = city;
}

function TabContent(ciudades) {

    this.elemento = novoElemento('div', '');

    for (let i = 0; i < ciudades.length; i++) {
        const tabContent = novoElemento('div', 'tabcontent');
        tabContent.setAttribute('id', `${ciudades[i].nombre}`);
        const h3 = novoElemento('h3', '');
        h3.innerHTML = ciudades[i].nombre;
        const p = novoElemento('p', '');
        p.innerHTML = ciudades[i].descripcion;

        tabContent.appendChild(h3);
        tabContent.appendChild(p);
        this.elemento.appendChild(tabContent);
    }

    // this.elemento.setAttribute('id', `${ciudades[i].nombre}`);
    // this.setId = (id, valorId) => this.elemento.setAttribute(id, valorId);
}

let ciudades = [
    { nombre: 'London', descripcion: 'London is the capital city of England.' },
    { nombre: 'Paris', descripcion: 'Paris is the capital of France.' },
    { nombre: 'Tokyo', descripcion: 'Tokyo is the capital of Japan.' }
];

function Elementos(ciudades) {
    this.array = [new Tab(ciudades), new TabContent(ciudades)];
}

function verticalTabs() {

    const areaPrincipal = document.querySelector('.main');
    const elementos = new Elementos(ciudades);
    elementos.array.forEach(el => areaPrincipal.appendChild(el.elemento));

}

function openCity(event, cityName) {
    let tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += " active";
}

new verticalTabs();
document.getElementById("defaultOpen").click();
