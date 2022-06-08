function contar(){
    let ini = document.getElementById('texti')
    let fim = document.getElementById('textf')
    let passo = document.getElementById('textp')
    let res = document.getElementById('res')
    if ( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!')
        


    }else{
        res.innerHTML = 'Contando:<br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
        window.alert('dados invalidos! Conssiderar passo 1')
        p = 1}
        if(i < f){
        
            //contagem crescente
            for(let c = 1; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    }
        res.innerHTML += ` \u{1F3C1}`


}