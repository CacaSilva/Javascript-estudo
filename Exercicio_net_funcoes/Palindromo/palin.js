const plv = document.querySelector("input#a")
//const res = document.querySelector("p#res")
const res = document.getElementById("res")

function palin(){
const a = plv.value    
const resa = a.split("").reverse()     //transforma a string em um array de string com letras separadas e inverte a posição
const res1 = resa.join("")
const res2 = res1.toString()
if(a===res2){
    res.innerHTML =  "A palavra " + a + " é um palíndromo" 
}else {
    res.innerHTML =  "A palavra " + a + " não é um palíndromo" 
}
}

