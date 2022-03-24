for(var i=1;i<5;i++){
    var SHexa = i.toString()
    for(let z = SHexa.length; z<4; z++){
        SHexa = '0' + SHexa
    }
    SHexa = SHexa.split('')
    var Hexa = SHexa[0] + SHexa[1] + ':' + SHexa[2] + SHexa[3]

}

console.log(SHexa)
console.log(Hexa)