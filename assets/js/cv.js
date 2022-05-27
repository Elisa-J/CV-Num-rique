function grandir(){

    var elem = document.querySelector('.progress1');
    var largeur = 5;
    var id = setInterval(progression, 50);
    function progression(){
        if (largeur < 100){
            largeur ++;
            console.log(largeur);
        }
        else {
            clearInterval(id);
        }
    }
}