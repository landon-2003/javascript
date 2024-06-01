document.getElementById('botao').addEventListener('click', contagem)

function contagem(){
    var num = document.getElementById('inum')
    var tab = document.getElementById('itabu')

    if(num.value.length == 0){
        alert('Impossível contar! Digite um valor válido.')
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
        var item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
        }
    }
}