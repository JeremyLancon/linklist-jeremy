let toggle = document.querySelector('.toggle'); // On récupère les infos de la div toggle
let body = document.querySelector('body');  //On recupère les informations du body

toggle.addEventListener('click', function(){ // J'attends un clic sur le toggle
    body.classList.toggle('nav-open'); // Lorsqu'un clic est effectué sur le toggle, on ajoute nav-open
})

