function cargarPagina(pagina){

    let contenido=document.getElementById("contenido")

    fetch(`${pagina}.html`)
    .then(response=>{

        if(!response.ok){
            throw new Error("Página no encontrada")
        }
        return response.text();

    })
    .then(html=> {

        contenido.innerHTML= html;
        history.pushState({pagina},"", `#${pagina}`)

    })
    .catch(err=>{

        contenido.innerHTML="<h1>Página no encontrada</h1>";

    })




}