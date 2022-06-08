var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()

var hora = 0
msg.innerHTML = `Agora são <strong>${hora} horas</strong><br>`
if(hora >= 0 && hora < 12){
    msg.innerHTML += 'Bom Dia!'
    img.src = 'dia.png'
    document.body.style.background = 'pink'
}
else if(hora >= 12 && hora > 18){
    msg.innerHTML += 'Boa noite!'
    img.src = 'tarde.png'
    document.body.style.background = 'blue'
}
else{
    msg.innerHTML += 'Boa Tarde!'
    img.src = 'noite.png'
    document.body.style.background = 'yellow'
}