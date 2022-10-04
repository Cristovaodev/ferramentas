function corUm() {
  let red = Math.random().toString();
  red = red.substr(2, 3);
  let green = Math.random().toString();
  green = green.substr(2, 3);
  let blue = Math.random().toString();
  blue = blue.substr(2, 3);
  bloco = document.getElementById('bloco_um');
  color = document.getElementById('cor_um');
  if ((red >= "255") || (green >= "255") || (blue >= "255")) {
    corUm();
  }else{
    bloco.style.background = "rgb("+red+","+green+","+blue+")";
    color.value = "rgb("+red+","+green+","+blue+")";
  }
}

function corDois() {
  let red2 = Math.random().toString();
  red2 = red2.substr(2, 3);
  let green2 = Math.random().toString();
  green2 = green2.substr(2, 3);
  let blue2 = Math.random().toString();
  blue2 = blue2.substr(2, 3);
  bloco2 = document.getElementById('bloco_dois');
  color2 = document.getElementById('cor_dois');
  if ((red2 >= "255") || (green2 >= "255") || (blue2 >= "255")) {
    corDois();
  }else{
    bloco2.style.background = "rgb("+red2+","+green2+","+blue2+")";
    color2.value = "rgb("+red2+","+green2+","+blue2+")";
  }
}

function corTres() {
  let red3 = Math.random().toString();
  red3 = red3.substr(2, 3);
  let green3 = Math.random().toString();
  green3 = green3.substr(2, 3);
  let blue3 = Math.random().toString();
  blue3 = blue3.substr(2, 3);
  bloco3 = document.getElementById('bloco_tres');
  color3 = document.getElementById('cor_tres');
  if ((red3 >= "255") || (green3 >= "255") || (blue3 >= "255")) {
    corTres();
  }else{
    bloco3.style.background = "rgb("+red3+","+green3+","+blue3+")";
    color3.value = "rgb("+red3+","+green3+","+blue3+")";
  }
}

function corQuatro() {
  let red4 = Math.random().toString();
  red4 = red4.substr(2, 3);
  let green4 = Math.random().toString();
  green4 = green4.substr(2, 3);
  let blue4 = Math.random().toString();
  blue4 = blue4.substr(2, 3);
  bloco4 = document.getElementById('bloco_quatro');
  color4 = document.getElementById('cor_quatro');
  if ((red4 >= "255") || (green4 >= "255") || (blue4 >= "255")) {
    corQuatro();
  }else{
    bloco4.style.background = "rgb("+red4+","+green4+","+blue4+")";
    color4.value = "rgb("+red4+","+green4+","+blue4+")";
  }
}

function corCinco() {
  let red5 = Math.random().toString();
  red5 = red5.substr(2, 3);
  let green5 = Math.random().toString();
  green5 = green5.substr(2, 3);
  let blue5 = Math.random().toString();
  blue5 = blue5.substr(2, 3);
  bloco5 = document.getElementById('bloco_cinco');
  color5 = document.getElementById('cor_cinco');
  if ((red5 >= "255") || (green5 >= "255") || (blue5 >= "255")) {
    corCinco();
  }else{
    bloco5.style.background = "rgb("+red5+","+green5+","+blue5+")";
    color5.value = "rgb("+red5+","+green5+","+blue5+")";
  }
}

function corSeis() {
  let red6 = Math.random().toString();
  red6 = red6.substr(2, 3);
  let green6 = Math.random().toString();
  green6 = green6.substr(2, 3);
  let blue6 = Math.random().toString();
  blue6 = blue6.substr(2, 3);
  bloco6 = document.getElementById('bloco_seis');
  color6 = document.getElementById('cor_seis');
  if ((red6 >= "255") || (green6 >= "255") || (blue6 >= "255")) {
    corSeis();
  }else{
    bloco6.style.background = "rgb("+red6+","+green6+","+blue6+")";
    color6.value = "rgb("+red6+","+green6+","+blue6+")";
  }
}

function gerarCores(){
  corUm();
  corDois();
  corTres();
  corQuatro();
  corCinco();
  corSeis();
}

function copiar(cor){
  
  var copiar_cor = document.getElementById('cor_'+cor).value;
  
  var hide = document.getElementById('hide');
 
  hide.value = copiar_cor;
  hide.select();
  document.execCommand('copy');
  hide.blur();
  alert("copiado");
}