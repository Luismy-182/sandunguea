const menuSticky = () => {

    const nav = document.querySelector('#nav');

    let ultimaPosicionScroll = window.scrollY;
    const tolerancia = 12;

    window.addEventListener('scroll', () => {

        const posicionActual = window.scrollY;

        // Estado visual del navbar
        if (posicionActual > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Ocultar al bajar
        if (
            posicionActual > ultimaPosicionScroll + tolerancia &&
            posicionActual > 800
        ) {

            nav.classList.add('minimizarNav');

        }

        // Mostrar al subir
        else if (
            posicionActual < ultimaPosicionScroll - tolerancia
        ) {

            nav.classList.remove('minimizarNav');
        }

        ultimaPosicionScroll = posicionActual;

    }, { passive: true });

};

export {
    menuSticky
}