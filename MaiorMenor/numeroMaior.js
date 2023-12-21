const na = document.getElementById("n1");
const nb = document.getElementById("n2");
const nc = document.getElementById("n3");
const res = document.getElementById("res")

function verificar(){
    const n1 = Number(na.value);
    const n2 = Number(nb.value);
    const n3 = Number(nc.value);
   let ma = 0
   let me = 0
     if(n1 > ma){
        ma = n1
        me= n1
    }if(n2 > ma){
        ma = n2
    }if(n2 < me){
        me = n2
    }if(n3 > ma){
        ma = n3
    }if(n3 < me){
        me = n3
    }
    res.innerHTML = `Entre os números ${n1}, ${n2} e ${n3}, o maior é o ${ma} e o menor é o ${me}`
}