function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; -- 1) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))
