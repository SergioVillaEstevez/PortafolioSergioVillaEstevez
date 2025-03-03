function cargarPagina(pagina) {
    let contenido = document.getElementById("contenido");

    fetch(`${pagina}.html`)
        .then(response => {
            if (!response.ok) { 
                throw new Error("Página no encontrada");
            }
            return response.text();
        })
        .then(html => {
            contenido.innerHTML = html;
            history.pushState({ pagina }, "", `#${pagina}`);

            // Esperar a que el contenido se cargue y luego desplazarse si hay un hash
            setTimeout(() => {
                if (window.location.hash) {
                    let seccion = window.location.hash.substring(1); // Eliminar el "#"
                    let elemento = document.getElementById(seccion);
                    if (elemento) {
                        elemento.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }, ); // Pequeño retraso para asegurar que el DOM se haya actualizado
        })
        .catch(err => {
            contenido.innerHTML = "<h1>Página no encontrada</h1>";
        });
}


