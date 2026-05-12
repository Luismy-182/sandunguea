const reproduccion = async () => {
    const videos = document.querySelectorAll('.video-interactivo');
    videos.forEach(video => {
        //activa/desactiva sonido con un click
        video.addEventListener('click', () => {
            //evalua si el video está mudo
            if (video.muted) {
                //si está mudo activa el sonido
                video.muted = false;

            } else {
                //si no está mudo mutea el sonido
                video.muted = true;
            };

            video.play();
        });



        //abrir pantalla completa

        video.addEventListener('dblclick', async () => {
            try {
                if (document.fullscreenElement) {
                    await document.exitFullscreen();
                } else {
                    await video.requestFullscreen();
                }
            } catch (error) {
                console.log(error);

            }

        });


        
    })

}

export {
    reproduccion
}