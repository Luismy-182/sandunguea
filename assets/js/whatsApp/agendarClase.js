import { alertas } from "../helpers/mostrarAlertas.js";
import { formatearFecha } from "../helpers/formatearFecha.js";

const agendarClase = () => {

    const formulario = document.querySelector('#agendar-form');
    const divAlertas = document.querySelector('.mostrar-alertas');






    const validarForm = (e) => {
        const nombre = document.querySelector('#nombre').value;
        const clase = document.querySelector('#clase').value;
        const experiencia = document.querySelector('#experiencia').value;
        const fecha = document.querySelector('#fecha').value;

        e.preventDefault();
        console.log();


        if (!nombre) {
            alertas('error', '⚠️ Por favor introduce tu nombre', divAlertas);
            return;
        }
        if (!clase) {
            alertas('error', '⚠️ Por favor seleccion tu clase', divAlertas);
            return;
        }
        if (!experiencia) {
            alertas('error', '⚠️ Por favor selecciona como te sientes bailando actualmente', divAlertas);
            return;
        }
        if (!fecha) {
            alertas('error', '⚠️ Por favor selecciona una fecha para venir', divAlertas);
            return;
        }
        const datos = {
            nombre: nombre,
            clase: clase,
            experiencia: experiencia,
            fecha: fecha
        };

        enviarWhatsApp(datos);


    }

    formulario.addEventListener('submit', validarForm);

    const enviarWhatsApp = ({ nombre, clase, experiencia, fecha }) => {
        const numeroSandunguea = 525648546082;

        // const interesClase = clase === 'Quiero conocer todas las clases'
        //     ? 'me gustaría conocer todas las clases'
        //     : `me interesa la clase de ${clase}`;

        const mensaje = `Hola 😄 Mi nombre es ${nombre} y me interesa la clase de ${clase}.\n\nActualmente ${experiencia.toLowerCase()}.\n\nMe encantaría agendar una clase muestra para el ${formatearFecha(fecha)} 💃`;

        //mandamos el mensaje

        // Construimos la URL usando encodeURIComponent para que no falle con acentos o espacios
        const url = `https://wa.me/${numeroSandunguea}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, '_blank');

    };

}

export {
    agendarClase
}