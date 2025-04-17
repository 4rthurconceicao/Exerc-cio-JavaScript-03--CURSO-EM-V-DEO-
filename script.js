function contar(){
    let ini = document.getElementById('txtvel')
    let fim = document.getElementById('txtvel2')
    let passo = document.getElementById('txtvel3')
    let res = document.getElementById('res')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
       window.alert('Numeros Ivalido!!')
    }else {
    res.innerHTML = 'Contando:'    
    let  i = Number(ini.value)
    let  f = Number(fim.value)
    let  p = Number(passo.value)
    if(p <=0){
        Window.alert('Passo inválido! considerando PASSO 1')
        p = 1
    }

    for(let c = i; c <= f;c += p){
         res.innerHTML += `<p> ${c}</p>`
    }

    }
}
    
    


