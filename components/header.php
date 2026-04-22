<header>
    <nav class="nav">


        <a class="nav-logo" href="#hero">
            <em>Sandunguea</em>
        </a>

        <ul class="nav-links">
            <li><a href="#why">¿Por qué?</a></li>
            <li><a href="#benefits">Beneficios</a></li>
            <li><a href="#clases">Horarios</a></li>
            <li><a href="#profesores">Maestros</a></li>
            <li><a href="#comunidad">Comunidad</a></li>
            <li><a href="#contacto" class="nav-cta">¡Inscríbete!</a></li>
        </ul>
    </nav>



    <button class="nav-burger" onclick="document.getElementById('navMob').classList.toggle('open')" aria-label="Menú">
        <span></span><span></span><span></span>
    </button>
    </nav>

    <div class="nav-mobile-menu" id="navMob">
        <a href="#why" onclick="document.getElementById('navMob').classList.remove('open')">¿Por qué?</a>
        <a href="#benefits" onclick="document.getElementById('navMob').classList.remove('open')">Beneficios</a>
        <a href="#clases" onclick="document.getElementById('navMob').classList.remove('open')">Horarios</a>
        <a href="#profesores" onclick="document.getElementById('navMob').classList.remove('open')">Maestros</a>
        <a href="#comunidad" onclick="document.getElementById('navMob').classList.remove('open')">Comunidad</a>
        <a href="#contacto" onclick="document.getElementById('navMob').classList.remove('open')" class="mob-cta">¡Inscríbete!</a>
    </div>

</header>