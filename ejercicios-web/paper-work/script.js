const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const alumnos = parseInt(document.getElementById('alumnos').value);
    const fotocopias = parseInt(document.getElementById('fotocopias').value);

    resultado.textContent = paperwork(alumnos, fotocopias);

    formulario.reset();

});

const paperwork = (alumnos, fotocopias) => {
    return (alumnos < 0 || fotocopias < 0)? 0 : `${alumnos * fotocopias} copias`;
};