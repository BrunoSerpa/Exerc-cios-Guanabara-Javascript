function Calcular(){
    var Num = document.getElementById('Number')
    var Seq = document.getElementById('Sequence')
    var Tab = document.getElementById('Res')
    if(Num.value.length == 0 ||Seq.value.length == 0){
		if(Num.value.length == 0){
            window.alert('Digite um Número com valor significativo!')
        }
        else{
            window.alert('Digite na sequência um valor positivo não nulo')
        }
    } else {
        let N = Number(Num.value)
        let C = 1
        let S = Number(Seq.value)
        while (C <= S){
            let item = document.createElement('option')
            item.text = `${N} x ${C} = ${N*C}`
            item.value = `tab${C}`
            Tab.appendChild(item)
            C++
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