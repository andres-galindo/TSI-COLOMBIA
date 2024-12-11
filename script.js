let principal = document.querySelector(".principal");
let modal = document.querySelector(".modal");
let btn = document.querySelector(".btn");
let nparte = document.querySelector(".nparte");
let equipo = document.querySelector(".equipo");
let compañia = "TSI COLOMBIA LTDA";
let notificaciones = document.querySelector(".notificaciones");
let title1 = "NCR P/N: ";
let title2 = "Desc. "

btn.addEventListener("click", ()=>{
    
    if(nparte.value === "" || equipo.value === ""){
        notificaciones.classList.remove("activo");
        nparte.value = "";
        equipo.value = "";
    }else{
        for (let i = 0; i <= 39; i++) {
            let div = document.createElement("div");
            div.classList.add("items");
            let empresa = document.createElement("h1");
            div.appendChild(empresa);
            empresa.innerText = compañia
            let ncr = document.createElement("small");
            div.appendChild(ncr)
            ncr.innerText = title1
            let h2 = document.createElement("h2");
            ncr.appendChild(h2);
            h2.innerText = nparte.value;
            let desc = document.createElement("small");
            div.appendChild(desc);
            desc.innerText = title2
            let h3 = document.createElement("h3");
            desc.appendChild(h3);
            h3.innerText = equipo.value
            principal.appendChild(div);
        }
        principal.style.background = "white";
        modal.classList.add("activo");
        notificaciones.classList.add("activo");
    }
})

