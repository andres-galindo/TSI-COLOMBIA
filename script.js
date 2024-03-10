let principal = document.querySelector(".principal");

principal.addEventListener("click", ()=>{
    let nparte = prompt("NUMERO DE PARTE")
    let nombre = "TSI COLOMBIAS SAS";
    let equipo = prompt("NOMBRE EQUIPO")
    
    for (let i = 0; i <= 39; i++) {
        let div = document.createElement("div");
        div.classList.add("items");
        let empresa = document.createElement("h1");
        div.appendChild(empresa);
        empresa.innerText = nombre
        let h2 = document.createElement("h2");
        div.appendChild(h2);
        h2.innerText = nparte
        let h3 = document.createElement("h3");
        div.appendChild(h3);
        h3.innerText = equipo
        principal.appendChild(div);
    }
})
