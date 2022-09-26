function media() {
    var notaUm = parseFloat(document.getElementById("priBim").value);
    var notaDois = parseFloat(document.getElementById("segBim").value);
    var notaTres = parseFloat(document.getElementById("terBim").value);
    var notaQuatro = parseFloat(document.getElementById("quaBim").value);
  
    var notaFinal = (notaUm + notaDois + notaTres + notaQuatro) / 4;
    var valorFinal = document.getElementById("mediaAqui");
  
    var mensagemResultado = "Sua Média é " + notaFinal;
  
    valorFinal.innerHTML = mensagemResultado;
  }
  