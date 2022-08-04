function Carregar(){
    var Msg1 = window.document.getElementById('Msg1')
    var Img = window.document.getElementById('Img')
    var Msg2 = window.document.getElementById('Msg2')
    var Msg3 = window.document.getElementById('Msg3')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    Msg1.innerHTML = `Agora são ${hora}:${minuto}, o macaco está:`
    if (hora >= 0 && hora < 3){
        Img.src = `Img/MacacoA.png`
        Msg2.innerHTML = `Jogando LOL, escondido dos pais :O`
        Msg3.innerHTML = `macaco mal >:(`
    } else if (hora >= 4 && hora < 6){
        Img.src = `Img/MacacoB.png`
        Msg2.innerHTML = `Dormindo :)`
        Msg3.innerHTML = `ufa :D`
    } else if (hora >= 7 && hora < 8){
        Img.src = `Img/MacacoC.png`
        Msg2.innerHTML = `Indo para a escola :o`
        Msg3.innerHTML = `pera, macaco estuda?`
    } else if (hora >= 8 && hora < 17){
        Img.src = `Img/MacacoD.png`
        Msg2.innerHTML = `Estudando`
        Msg3.innerHTML = `bons estudos macaco ;)`
    } else if (hora >= 17 && hora < 22){
        Img.src = `Img/MacacoE.gif`
        Msg2.innerHTML = `O macaco está brincado :D`
        Msg3.innerHTML = `olk, meteu logo um mortal :O`
    } else{
        Img.src = `Img/MacacoB.png`
        Msg2.innerHTML = `O macaco está a mimir`
        Msg3.innerHTML = `bons sonhos macaquinho ;)`
    }
}
/* Parte navbar do site abaixo               ||
                                            _||_
                                            \  /
                                             \/
*/
function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '10px';
    }
}