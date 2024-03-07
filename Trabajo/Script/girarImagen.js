/*function rotarImagen() {
    var imagenGirar = document.getElementById('ImagenGirar');
    var imagenGio = document.getElementById('GioGirar');

    // Rotar la imagen girada 45 grados
    imagenGirar.style.transform = "rotateY(23423423deg)" ;
    
    // Mostrar la imagen 'GioGirar'
    imagenGio.style.display = 'block';
    console.log('entra en rotar');
}*/

function girar(){
    var ImagenGirar = document.querySelectorAll('.ImagenGirar');
    var Imagen2Girar = document.querySelectorAll('.Imagen2Girar');
    var BarraAmor = document.querySelectorAll('.ImagenAparecer');

    ImagenGirar.forEach(function(tarjeta) {
        tarjeta.classList.add('visible');
    });

    function miFuncion() {    
        Imagen2Girar.forEach(function(tarjeta) {
            tarjeta.classList.add('ver');   
        });
    }
    setTimeout(miFuncion, 1000);

    function miFuncion2() {    
        BarraAmor.forEach(function(tarjeta) {
            tarjeta.classList.add('ver');   
        });
    }
    setTimeout(miFuncion2, 1000);
}
    
function mostrarElementos() {
    var imagenGirar = document.querySelector('.ImagenGirar');
    var barraAmor = document.getElementById('BarraAmor');
    var corazon = document.getElementById('Corazon');

    imagenGirar.style.display = 'block';
    barraAmor.style.display = 'block';
    corazon.style.display = 'block';
}