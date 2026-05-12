
const menuSticky = () => {
    const nav = document.querySelector('#nav');
    const emocional = document.querySelector('.emocional');

    window.addEventListener('scroll', () => {
        const ubicacion = emocional.getBoundingClientRect();


        if (ubicacion.top < 100) {
            if (!nav.classList.contains('minimizarNav')) {
                nav.classList.add('minimizarNav');
            }
        } else {
            if (nav.classList.contains('minimizarNav')) {
                nav.classList.remove('minimizarNav');
            }

        }
    });
}


export {
    menuSticky
}