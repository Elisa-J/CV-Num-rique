function grandir(){

    
    var largeur = 5;
    var id = setInterval(progression, 50);
    function progression(){
        if (largeur < 80){
            largeur ++;
            console.log(largeur);
        }
        else {
            clearInterval(id);
        }
    }
}
var elem = document.querySelector('.progress1');
elem.addEventListener('click', function() {
    grandir();
})
