function waFlotante() {
    //número de la Miss
    const numeroSilvia = 525648546082;
    //mensaje predeterminado en whatsApp flotante
    const mensaje = 'Hola Miss Silvia! Me interesa tomar clase en sandunguea, puede darme más información?';

    // nos apoyamos de URLSearchParams para manejar el encoding automáticamente
    const params = new URLSearchParams({
        text: mensaje
    });

    //Url a enviar
    const url = `https://wa.me/${numeroSilvia}?${params.toString()}`;



    const waFloat = document.querySelector('#wa-float');
    waFloat.addEventListener('click', e => {
        e.preventDefault();
        //abrimos el enlace
        window.open(url, '_blank');

    });

}


export {
    waFlotante
}