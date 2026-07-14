const hideWhatsApp = () => {
    //boton flotante
    const btnWhatsApp = document.querySelector(".wa-wrapper");
    const footer = document.querySelector(".cierre");


    window.addEventListener('scroll', () => {

        const footerRect = footer.getBoundingClientRect();



        const trigger = 120; // px antes del footer

        if (footerRect.top < window.innerHeight - trigger) {
            btnWhatsApp.classList.add('hide');


        } else {
            btnWhatsApp.classList.remove('hide');
        }
    });

}


const pauseAnimation = () => {
    const btnWhatsApp = document.querySelector(".wa-wrapper");
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };

    const callback = (entradas, observador) => {


        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                btnWhatsApp.classList.add('pause-animation');
                console.log('ya lo vi');
                


            } else {

                btnWhatsApp.classList.remove('pause-animation');
                console.log('No lo veo');

            };

        });

    }


    const observer = new IntersectionObserver(callback, options);

    const sadungueaSection = document.querySelector('.vive-sandunguea');
    observer.observe(sadungueaSection);




}


export {
    hideWhatsApp,
    pauseAnimation
}