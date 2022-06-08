
//gestion du bouton menu
var menu = document.getElementById("menu");
var burger = document.getElementById("iconBurger");
document.getElementById("burger").addEventListener("click", function () {
    menu.classList.toggle("open");
    burger.classList.toggle("fa-xmark");
    burger.classList.toggle("fa-bars");
});


// function grandir(){

    
//     var largeur = 5;
//     var id = setInterval(progression, 50);
//     function progression(){
//         if (largeur < 80){
//             largeur ++;
//             console.log(largeur);
//         }
//         else {
//             clearInterval(id);
//         }
//     }
// }
// var elem = document.querySelector('.progress1');
// elem.addEventListener('click', function() {
//     grandir();
// })

