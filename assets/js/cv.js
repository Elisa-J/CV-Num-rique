
//gestion du bouton menu
var menu = document.getElementById("menu");
var burger = document.getElementById("iconBurger");
document.getElementById("burger").addEventListener("click", function () {
    menu.classList.toggle("open");
    burger.classList.toggle("fa-xmark");
    burger.classList.toggle("fa-bars");
});


// var textItem = document.querySelector(".text-div-item");

// textItem.addEventListener("hover",function () {
//     style.display = "block";
// });

// if hover -> display txt
function displayTxt(event) {
    //evt.currentTarget.style.display = "block";
   // evt.currentTarget.style.display="block";
    console.log("we are here")
}
// if leave -> hide txt
function removeTxt(evt) {
    evt.currentTarget.style.display = "none";
}

/* mouseover and mouseout events to `.wrapper` element */
//var textItem2 = document.querySelector('.textDivItem');
var textItem2 = document.getElementsByClassName("textDivItem");
textItem2.addEventListener( 'mouseover', displayTxt );
textItem2.addEventListener( 'mouseout', removeTxt );