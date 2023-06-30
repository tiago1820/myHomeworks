function nuevoElemento(tagName, className) {
    const elemento = document.createElement(tagName);
    elemento.className = className;
    return elemento;
}

function Tuberia(reversa = false) {
    this.elemento = nuevoElemento('div', 'tuberia');

    const borda = nuevoElemento('div', 'borda');
    const cuerpo = nuevoElemento('div', 'cuerpo');
    this.elemento.appendChild(reversa ? cuerpo : borda);
    this.elemento.appendChild(reversa ? borda : cuerpo);

    this.setAltura = altura => cuerpo.style.height = `${altura}px`;

}

const b = new Tuberia(true);
b.setAltura(300);
document.querySelector('.flappy').appendChild(b.elemento);

