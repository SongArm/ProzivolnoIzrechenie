const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let imena = ['Krasi' , 'Tinko' , 'Sekishcho' , 'Zlatin']
let mesta = ['Karlovo' , 'Plovdiv' , 'Burgas' , 'Levski']
let glagol = ['patuva' , 'ticha', 'kara' , 'izliza']
let sushtestvitelniImena = ['s kola' , 'na vun' , 's vlak' , 's priqteli']
let narechiq = ['burzo', 'bavno' , 'studeno' , 'toplo']
let detaili = ['do kraq na grada' , 'na kino' , 'dokato vali' , 'v parka']

function randomDuma(arr){
    let duma = arr[Math.floor(Math.random()*arr.length)]
    return duma
}

let randomIme = randomDuma(imena)
let randomMesta = randomDuma(mesta)
let randomGlagol = randomDuma(glagol)
let randomSusht = randomDuma(sushtestvitelniImena)
let randomNarechiq = randomDuma(narechiq)
let randomDetaili = randomDuma(detaili)

let chovek = `${randomIme} from ${randomMesta}`
let deistvie = `${randomNarechiq} ${randomGlagol} ${randomSusht}`
let izrechenie = `${chovek} ${deistvie} ${randomDetaili}`

console.log(izrechenie);

let recursive = function () {
    readline.question(`Click [Enter] to generate a new one.` , string => string = izrechenie);{

            console.log(izrechenie);
    }

    
}  