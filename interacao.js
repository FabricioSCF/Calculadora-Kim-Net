var exibicao = document.getElementById("exibir")




function Clicar() {
    var hoje = document.getElementById("hoje").value
    var valor = Number(document.getElementById("valor").value)
    var vencimento = document.getElementById("vencimento").value
    var atraso = hoje - vencimento
    var juros = [0.21, 0.25, 0.28, 0.30, 0.33, 0.40]
    if (valor == 75) {
        var res = atraso*juros[1]+ valor+ 1.5
        exibicao.innerHTML = `O VALOR A SER PAGO É: R$ ${res}`
    }else if(valor == 85){
        var res = atraso*juros[2]+ valor+ 1.7
        exibicao.innerHTML = `O VALOR A SER PAGO É: R$ ${res}`
    }else if(valor == 90){
        var res = atraso*juros[3]+ valor+ 1.8
        exibicao.innerHTML = `O VALOR A SER PAGO É: R$ ${res}`
    }else if(valor == 100){
        var res = atraso*juros[4]+ valor+ 2
        exibicao.innerHTML = `O VALOR A SER PAGO É: R$ ${res}`
    }else if(valor == 120){
        var res = atraso*juros[5]+ valor+ 2.4
        exibicao.innerHTML = `O VALOR A SER PAGO É: R$ ${res}`
    }else if(valor == 65){
        var res = atraso*juros[0]+ valor + 1.3
        exibicao.innerHTML = `O VALOR A SER PAGO É: R$ ${res}`
    }
}