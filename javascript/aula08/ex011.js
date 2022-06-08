var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 16)
console.log('menor de idade')
else {
    console.log('Maior de idade')
    if (idade < 18 || idade > 65)
    console.log('Voto opcional')
    else {
        console.log('Voto obrigatorio')

    }
}