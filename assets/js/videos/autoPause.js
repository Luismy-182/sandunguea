import Reproductor from "./Reproductor.js";

const reproductor = new Reproductor();
const autoPause = () => {
    //seleccionamos el elemento que queremos observar
    const videoSection = document.querySelector('.vive-sandunguea');

    //creamos una instancia de IntersectionObserver

    const opciones = {
        //no necesita que si o si estes a mitad de videos viendo para activar la reproducción
        threshold: 0.4
    }
    const observer = new IntersectionObserver(isVisible, opciones);

    //asignando el elemento a observar
    observer.observe(videoSection);
    //una vez que le defines que observar se ejecuta su callback
    function isVisible(entradas) {
        //nos entrega un array IntersectionObserver
        entradas.forEach(entrada => {
            //si se intersecciona activamos video
            if (entrada.isIntersecting) {
                reproductor.play();

            } else {
                reproductor.pause();

            };


        });


    }

}

export {
    autoPause
}