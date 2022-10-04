var tipoDeSenha, medidor, c, d, posicao, i, senha, senha_final = "", texto;

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

function obtertamanho() {
  tamanho = document.getElementById('tamanho').value = medidor; console.log(medidor);
}

function posicaoAleatoria(tamanho) {
  posicao = Math.floor(Math.random() * tamanho);
  posicao = posicao.toString();
}

function gerarSenha() {
  if (tipoDeSenha === "alfanumerico") {
    for (i = 0; i < tamanho; i++) {
      posicaoAleatoria(92);
      senha = alfanumerico[posicao];
      senha = senha.toString();
      senha_final = senha_final + senha;
    }
    document.getElementById("visor").value = senha_final;
    senha_final = "";
  } else if (tipoDeSenha === "alfabeticom") {
    for (i = 0; i < tamanho; i++) {
      posicaoAleatoria(26);
      senha = alfabeticom[posicao];
      senha = senha.toString();
      senha_final = senha_final + senha;
    }
    document.getElementById("visor").value = senha_final;
    senha_final = "";
  } else if (tipoDeSenha === "alfabeticoM") {
    for (i = 0; i < tamanho; i++) {
      posicaoAleatoria(26);
      senha = alfabeticoM[posicao];
      senha = senha.toString();
      senha_final = senha_final + senha;
    }
    document.getElementById("visor").value = senha_final;
    senha_final = "";
  } else if (tipoDeSenha === "numerico") {
    for (i = 0; i < tamanho; i++) {
      posicaoAleatoria(10);
      senha = numerico[posicao];
      senha = senha.toString();
      senha_final = senha_final + senha;
    }
    document.getElementById("visor").value = senha_final;
    senha_final = "";
  } else if (tipoDeSenha == "simbolico") {
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

function actualizar(){
obterValores();
obtertamanho();
}

function terminar() {
  obterValores();
  obtertamanho();
  gerarSenha();
}

function blur(){
  document.getElementById('tamanho').blur();
  document.getElementById('visor').blur();
}

function copiar(){
  texto = document.getElementById('titulo');
  texto.select();
  
  document.execCommand('copy');
  
}