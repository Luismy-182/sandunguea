
const menuResponsive = () => {
    const btnMenu = document.querySelector('#hamburguesa');

    btnMenu.addEventListener('click', mostrarMenu);
};

const mostrarMenu = (e) => {
    e.preventDefault();
    console.log('mostrando overlay...');

    //un selector a pantalla negra y otro al contenido de los links
    const overlay = document.querySelector('#overlay-hamburguesa');
    const movilLinks=document.querySelector('#movil-links');
    const bodyfreeze=document.querySelector('body');
    


    overlay.classList.add('mostrar');
    bodyfreeze.classList.add('body-movil');

    overlay.addEventListener('click', () => {

        overlay.classList.remove('mostrar');
         bodyfreeze.classList.remove('body-movil');
    });
    
    movilLinks.addEventListener('click', (e)=>{
        e.stopPropagation();
    });

}


export {
    menuResponsive
}