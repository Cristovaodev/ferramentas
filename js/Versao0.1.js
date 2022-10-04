var tipoDeSenha, medidor, c, d, posicao, i, senha, senha_final = "";

alfanumerico = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "@", "#", "€", "_", "&", "-", "+", "/", "*", "!", "?", "~", "|", "√", "π", "Ω", "μ", "÷", "×", "∆", "£", "¥", "$", "¢", "^", "=", "≠", "∞", "≈", "%"];
alfabeticom = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alfabeticoM = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
numerico = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
simbolo = ["@", "#", "€", "_", "&", "-", "+", "/", "*", "!", "?", "~", "|", "√", "π", "Ω", "μ", "÷", "×", "∆", "£", "¥", "$", "¢", "^", "=", "≠", "∞", "≈", "%"];

function obterValores() {
  tipoDeSenha = document.getElementById('tipoDeSenha').value;
  medidor = document.getElementById('medidor').value;
  tamanho = document.getElementById('tamanho').value;
  visor = document.getElementById('visor').value;
}

//Verificação: function obtertamanho() { tamanho.value = medidor; console.log(medidor);}

function posicaoAleatoria(tamanho) {
  posicao = Math.floor(Math.random() * tamanho);
  posicao = posicao.toString();
}

function gerarSenha() {
  if (tipoDeSenha === "alfanumerico") {
    tamanho = document.getElementById('tamanho').value;
    for (i = 0; i < tamanho; i++) {
      posicaoAleatoria(92);
      senha = alfanumerico[posicao];
      senha = senha.toString();
      senha_final = senha_final + senha;
    }
    document.getElementById("visor").value = senha_final;
    senha_final = "";
  } else if (tipoDeSenha === "alfabeticom") {
    tamanho = document.getElementById('tamanho').value;
    for (i = 0; i < tamanho; i++) {
      posicaoAleatoria(26);
      senha = alfabeticom[posicao];
      senha = senha.toString();
      senha_final = senha_final + senha;
    }
    document.getElementById("visor").value = senha_final;
    senha_final = "";
  } else if (tipoDeSenha === "alfabeticoM") {
    tamanho = document.getElementById('tamanho').value;
    for (i = 0; i < tamanho; i++) {
      posicaoAleatoria(26);
      senha = alfabeticoM[posicao];
      senha = senha.toString();
      senha_final = senha_final + senha;
    }
    document.getElementById("visor").value = senha_final;
    senha_final = "";
  } else if (tipoDeSenha === "numerico") {
    tamanho = document.getElementById('tamanho').value;
    for (i = 0; i < tamanho; i++) {
      posicaoAleatoria(10);
      senha = numerico[posicao];
      senha = senha.toString();
      senha_final = senha_final + senha;
    }
    document.getElementById("visor").value = senha_final;
    senha_final = "";
  } else if (tipoDeSenha == "simbolico") {
    tamanho = document.getElementById('tamanho').value;
    for (i = 0; i < tamanho; i++) {
      posicaoAleatoria(30);
      senha = simbolo[posicao];
      senha = senha.toString();
      senha_final = senha_final + senha;
    }
    document.getElementById("visor").value = senha_final;
    senha_final = "";
  } else {
    alert("Ocorreu um erro inesperado!!\nTente novamente");
  }
}

alert("\n"+alfanumerico.length+"\n"+alfabeticom.length+"\n"+alfabeticoM.length+"\n"+numerico.length+"\n"+simbolo.length);

function terminar(){
obterValores();
gerarSenha();
}