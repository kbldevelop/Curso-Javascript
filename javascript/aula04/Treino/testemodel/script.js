window.alert('Olá')
function clicar(){
var nome = window.document.getElementById('nick')
var res = window.document.querySelector('div#res')
var n = nome.value 
res.innerHTML = `Seu email é: ${n} `
var sen = window.document.getElementById('senha')
var s = sen.value
res.innerHTML += `sua senha é ${s}`


}