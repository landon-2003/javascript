/*window.document.getElementById('msg')
window.document.getElementById('imagem')*/

function carregar(){
    var data = new Date()
    var hora = data.getHours()
    window.document.getElementById('msg').innerHTML = `Agora são ${hora} horas.`

    if(hora >= 6 && hora < 12){
        window.document.getElementById('imagem').src = 'imagens/manha.png'
        document.body.style.background = '#468bce'
    }else if(hora >=12 && hora <19){
        window.document.getElementById('imagem').src = 'imagens/tarde.png'
        document.body.style.background = '#fa8b54' 
    }else if (hora >=19 && hora <24){
        window.document.getElementById('imagem').src = 'imagens/noite.png'
        document.body.style.background = '#3d1146'
    }else{
        window.document.getElementById('imagem').src = 'imagens/madrugada.png'
        document.body.style.background = '#1d2a3c'
    }
}