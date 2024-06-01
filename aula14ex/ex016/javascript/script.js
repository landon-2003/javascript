document.getElementById('botao').addEventListener('click', contagem)

function contagem() {
    var ini = document.getElementById('iinic')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('Valor inválido, impossível contar!')
    }else{
        res.innerHTML = `Contando:<br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if(p <= 0){
            alert('Passo inválido, considerando passo 1')
            p = 1
        }
        if(i < f){
        //contagem crescente
            for(var c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        }else{
        //contagem regressiva
            for(var c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}