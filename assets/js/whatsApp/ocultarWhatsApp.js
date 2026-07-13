const whatsAppFloat = () => {
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


const hiddeInVideo = () => {
    const btnWhatsApp = document.querySelector(".wa-wrapper");
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };

    const callback = (entradas, observador) => {


        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                btnWhatsApp.classList.add('hide');
                console.log('En la mira');


            } else {

                btnWhatsApp.classList.remove('hide');
                console.log('No lo veo');

            };

        });

    }


    const observer = new IntersectionObserver(callback, options);

    const sadungueaSection = document.querySelector('.sandunguea');
    observer.observe(sadungueaSection);


    if (sadungueaSection) {
        observer.observe(sadungueaSection);
    } else {
        console.error("No se encontró la sección '.sandunguea'");
    }

}


export {
    whatsAppFloat,
    hiddeInVideo
}