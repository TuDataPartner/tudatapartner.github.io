
/* Prueba multi modal erizo */

/* Declaración de las variables */
var modals = document.getElementsByClassName('modal-container'); /* acá va el div del modal, y guarda todos los elementos de modal */
var btns = document.getElementsByClassName("ctamodal"); /* Acá va el div del botón o el que abre el modal */
var btnclose = document.getElementsByClassName("close"); /* Acá va el div o botón que cierra el modal (el cual va dentro del modal) */


for(let i=0;i<btns.length;i++){ /* El valor que precede a length es la variable abre el modal (openmodal) */
    btns[i].onclick = function() { /* Acá, para el botón de abrir "i", cuando aprete click, me ejecuta la función */
        /* modals[i].style.display = "block"; */
        modals[i].style.opacity = "1"; /* Acá lo que se hace es que activa el modal "i" al hacer click en el botón "i" */
        modals[i].style.visibility = "visible";
    }
}
for(let i=0;i<btnclose.length;i++){ /* El valor que precede a length es la variable cierra el modal (close) */
    btnclose[i].onclick = function() { /* Acá, para el botón de cerrar "i", cuando aprete click, me ejecuta la función */
        /* modals[i].style.display = "none"; *//* Acá lo que se hace es que desactiva el modal "i" al hacer click en el botón "i" */
        modals[i].style.opacity = "0"
        modals[i].style.visibility = "hidden";
    }
}

/* ssssssssssssssssssssssssssssssssssssssss */
