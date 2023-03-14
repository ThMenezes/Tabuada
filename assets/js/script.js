function tabuada() {
    const numero = document.getElementById('numero')
    const tabela = document.getElementById('lista')
    
    if (numero.value.length == 0) {
        alert ('Impossível, digite um número!')
               
    } else {
        let conta = Number(numero.value)
        let valorTabuada = 1
        tabela.innerHTML = ""
        
        for (valorTabuada = 1; valorTabuada <= 10 ; valorTabuada ++) {
            let item = document.createElement('option')
            item.text = `${conta} x ${valorTabuada} = ${conta * valorTabuada}`
            item.value = `tabela${valorTabuada}`
            tabela.appendChild(item)
        }              
    }
} 
