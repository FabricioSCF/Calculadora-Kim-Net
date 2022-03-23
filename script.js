var exibicao = document.getElementById("exibir");

function Clicar() {
  var valor = Number(document.getElementById("valor").value);
  var atraso = calculaDatas();
  console.log(atraso);

  var juros = [0.21, 0.25, 0.28, 0.3, 0.33, 0.4];
  if (valor == 75) {
    var res = atraso * juros[1] + valor + 1.5;
    console.log(valor);
    exibicao.innerHTML = `O VALOR A SER PAGO É: R$ ${res}`;
  } else if (valor == 85) {
    var res = atraso * juros[2] + valor + 1.7;
    exibicao.innerHTML = `O VALOR A SER PAGO É: R$ ${res}`;
  } else if (valor == 90) {
    var res = atraso * juros[3] + valor + 1.8;
    exibicao.innerHTML = `O VALOR A SER PAGO É: R$ ${res}`;
  } else if (valor == 100) {
    var res = atraso * juros[4] + valor + 2;
    exibicao.innerHTML = `O VALOR A SER PAGO É: R$ ${res}`;
  } else if (valor == 120) {
    var res = atraso * juros[5] + valor + 2.4;
    exibicao.innerHTML = `O VALOR A SER PAGO É: R$ ${res}`;
  } else if (valor == 65) {
    var res = atraso * juros[0] + valor + 1.3;
    exibicao.innerHTML = `O VALOR A SER PAGO É: R$ ${res}`;
  }
}

function calculaDatas() {
  var hoje = document.getElementById("hoje").value;
  var vencimento = document.getElementById("vencimento").value;
  hoje = new Date(hoje);
  vencimento = new Date(vencimento);

  var diffInTime = Math.abs(hoje - vencimento);
  var timeInOnDay = 1000 * 60 * 60 * 24;
  var diffInDays = diffInTime / timeInOnDay;

  return diffInDays;
}