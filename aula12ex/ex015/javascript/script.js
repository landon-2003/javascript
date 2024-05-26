document.getElementById('ver').addEventListener('click', verificar)

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    if(document.getElementById('iano').value.length == 0 || document.getElementById('iano').value > ano){
        window.alert('[Erro] Verifique os dados digitados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(document.getElementById('iano').value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade <=3){
                //bebê
                img.setAttribute('src','imagens/bebem.png')
            }else if (idade >=4 && idade <=10){
                //criança
                img.setAttribute('src','imagens/criançam.png')
            }else if (idade >=11 && idade <=17){
                //adolescente
                img.setAttribute('src','imagens/adolescentem.png')
            }else if (idade >=18 && idade <= 25){
                //jovem
                img.setAttribute('src','imagens/jovemm.png')
            }else if(idade >=26 && idade <=40){
                //homem
                img.setAttribute('src','imagens/homem.png')
            }else if(idade >=41 && idade <=55){
                //maduro
                img.setAttribute('src','imagens/madurom.png')
            }else{
                //idoso
                img.setAttribute('src','imagens/idoso.png')
            }
        } else{
            gênero = 'Mulher'
            if (idade >=0 && idade <=3){
                //bebê
                img.setAttribute('src','imagens/bebef.png')
            }else if (idade >=4 && idade <=10){
                //criança
                img.setAttribute('src','imagens/criançaf.png')
            }else if (idade >=11 && idade <=17){
                //adolescente
                img.setAttribute('src','imagens/adolescentef.png')
            }else if (idade >=18 && idade <= 25){
                //jovem
                img.setAttribute('src','imagens/jovemf.png')
            }else if(idade >=26 && idade <=40){
                //Mulher
                img.setAttribute('src','imagens/mulher.png')
            }else if(idade >=41 && idade <=55){
                //madura
                img.setAttribute('src','imagens/maduraf.png')
            }else{
                //idosa
                img.setAttribute('src','imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}