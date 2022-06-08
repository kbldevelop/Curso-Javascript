let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) >= 1 && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi inserido`
        lista.appendChild(item)
        res.innerHTML =''
    } else {
        window.alert('numero invalido ou ja inserido na lista.')
    }
    num.value = ''
    num.focus()
}


function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0        
        for(let pos in valores){
            soma  += valores[pos]
            if(valores[pos] < maior)
            maior = valores[pos]
            if(valores[pos] > menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Você tem ${tot} valores cadastrados.</p>`
        res.innerHTML += `<p>O menor valor inserido foi ${maior}</p>`
        res.innerHTML += `<p>O maior valor inserido foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos: ${soma}</p>`
        res.innerHTML += `<p>a media dos valores é ${media}</p>`
    }
}