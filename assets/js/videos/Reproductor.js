
export default class Reproductor {
    constructor() {
        this.videos = document.querySelectorAll('.video-interactivo');
        this.audio();
        this.fullScreen();
    }

    audio() {
        this.videos.forEach(video => {


            //activa/desactiva sonido con un click
            video.addEventListener('click', () => {


                const card = video.closest('.video-card');

                const volumeIcon = card.querySelector('.volume-icon');
                const mutedIcon = card.querySelector('.muted-icon');
                // guardamos el estado actual
                const estabaMuteado = video.muted;

                this.videos.forEach(v => {

                    v.muted = true;

                    const vCard = v.closest('.video-card');

                    vCard.querySelector('.volume-icon').style.display = "none";
                    vCard.querySelector('.muted-icon').style.display = "block";
                });
                //evalua si el video está mudo
                // si estaba muteado -> activamos sonido
                if (estabaMuteado) {

                    video.muted = false;

                    mutedIcon.style.display = "none";
                    volumeIcon.style.display = "block";

                }
            });
        });
    }

    async fullScreen() {
        //abrir pantalla completa
        this.videos.forEach(video => {

            video.addEventListener('dblclick', async () => {
                try {
                    const card = video.closest('.video-card');

                    if (document.fullscreenElement) {
                        await document.exitFullscreen();
                    } else {

                        // Navegadores normales
                        if (card.requestFullscreen) {
                            await card.requestFullscreen();

                            // Safari iPhone
                        } else if (video.webkitEnterFullscreen) {
                            video.webkitEnterFullscreen();
                        }

                    }
                } catch (error) {
                    console.log(error);

                }

            });
        });
    }



}


