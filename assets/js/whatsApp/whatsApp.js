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
    const btnWhatsApp = document.querySelector(".wa-float");
    const footer = document.querySelector(".footer");
    window.addEventListener('scroll', () => {

        const footerRect = footer.getBoundingClientRect();

        const overlap = window.innerHeight - footerRect.top;

        if (overlap > 0) {

            btnWhatsApp.style.bottom = `${overlap + 18}px`;

        } else {

            btnWhatsApp.style.bottom = `1.8rem`;
        }

    });

}


export {
    whatsApp
}