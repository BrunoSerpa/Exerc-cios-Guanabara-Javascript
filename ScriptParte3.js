function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAn = document.getElementById('TextYear')
    var res = document.querySelector('div#res')
    if (fAn.value.length == 0 || Number(fAn.value) > ano){
     window.alert("Tem algo de errado com esse ano, tente novamente!")   
    } else{
        var fsex = document.getElementsByName('TypeSex')
        var idd = ano - Number(fAn.value)
        var gnr = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gnr = 'um homem'
            if(idd >= 0 && idd < 10){img.setAttribute('src','Img/FtBM.png')
            } else if(idd < 15){img.setAttribute('src','Img/FtCM.png')
            } else if(idd < 21){img.setAttribute('src','Img/FtJM.png')
            } else if(idd < 50){img.setAttribute('src','Img/FtAM.png')
            } else if(idd == ano){img.setAttribute('src','Img/Jesus.png')
            } else{img.setAttribute('src','Img/FtIM.png')}
        } else if (fsex[1].checked){
            gnr = 'uma mulher'
            if(idd >= 0 && idd < 10){img.setAttribute('src','Img/FtBF.png')
            } else if(idd < 15){img.setAttribute('src','Img/FtCF.png')
            } else if(idd < 21){img.setAttribute('src','Img/FtJF.png')
            } else if(idd < 50){img.setAttribute('src','Img/FtAF.png')
            } else if(idd == ano){img.setAttribute('src','Img/Rainha.png')
            } else{img.setAttribute('src','Img/FtIF.png')}
        }
        res.style.textAlign = 'center'

        res.innerHTML = `Detectamos ${gnr} com ${idd} ano${idd>1?'s':''}`
        res.appendChild(img)
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