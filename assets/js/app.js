import { menuResponsive } from '../js/nav/responsive.js';
import { whatsApp } from './whatsApp/whatsApp.js';
import { menuSticky } from '../js/nav/menuSticky.js';
import { reproduccion } from './videos/reproduccion.js';
document.addEventListener('DOMContentLoaded', () => {
    menuResponsive();
    menuSticky();
    whatsApp();
    reproduccion();
});