var num = [8,1,2,7,3,9,6,5,4]

num.sort()

for(var pos in num){
    console.log(`A posição ${pos} tem o valor de ${num[pos]}`)
}

let val = num.indexOf(7)

if(val == -1){
    console.log('Valor não encontrado!')
}else{
    console.log(`O valor está na posição ${val}`)
}
