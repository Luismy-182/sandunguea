import { menuResponsive } from '../js/nav/responsive.js';
import { whatsApp } from './whatsApp/whatsApp.js';
import { menuSticky } from '../js/nav/menuSticky.js';
import { autoPause } from './videos/autoPause.js';
import { agendarClase } from './whatsApp/agendarClase.js';
import { restringirCalendario } from './helpers/restringirCalendario.js';
document.addEventListener('DOMContentLoaded', () => {
    menuResponsive();
    menuSticky();
    whatsApp();
    autoPause();
    agendarClase();
    restringirCalendario();
});