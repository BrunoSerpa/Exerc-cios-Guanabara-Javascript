function Calcular(){
    var NumI = document.getElementById('FirstSequence')
    var NumF = document.getElementById('LastSequence')
    var Jump = document.getElementById('Jump')
    if (NumI.value.length == 0 || NumF.value.length == 0 || Jump.value.lentgh == 0) {
        window.alert('Digite números válidos!')
    }
    else {
        Res.innerHTML = 'Contando:'
        let i = Number(NumI.value)
        let f = Number(NumF.value)
        let u = Number(Jump.value)
        if(f>i && u<0 || f<i && u>0){
            window.alert('Digite números válidos!')
        }
        else{
            if (i < f) {
            for(let c = i; c <= f; c+= u) {
                Res.innerHTML += `${c}; `
                }
            } else {
                for(let c = i; c > f; c -= u) {
                    Res.innerHTML += `${c};`
                }
            }
            Res.innerHTML += `\u{1F3C1}`
        }
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