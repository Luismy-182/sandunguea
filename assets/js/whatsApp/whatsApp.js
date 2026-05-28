function whatsApp() {
    //número de la Miss
    const numeroSandunguea = 525648546082;
    //seleccionamos todos los botones de whatsApp
    const btnsWhatsApp = document.querySelectorAll('[data-mensaje]');

    //un evento por cada btn
    btnsWhatsApp.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Obtenemos el mensaje específico de este botón
            const mensaje = btn.getAttribute('data-mensaje');
            // Construimos la URL usando encodeURIComponent para que no falle con acentos o espacios
            const url = `https://wa.me/${numeroSandunguea}?text=${encodeURIComponent(mensaje)}`;

            window.open(url, '_blank');
        });
    });
    whatsAppFloat();

}


const whatsAppFloat = () => {


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


export {
    whatsApp
}