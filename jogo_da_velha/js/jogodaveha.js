const jogador1 = "X";
const jogador2 = 'O';
var quemTajogando = jogador1;
var fimDeJogo = false;

function atualizaJogo(){
    if (fimDeJogo){return;}

    if (quemTajogando == jogador1){
        let jogada = document.querySelectorAll("div#jogo img")[0];
        jogada.setAttribute("src", "imgs/x.jpg");
    } else{
        let jogada = document.querySelectorAll("div#jogo img")[0];
        jogada.setAttribute("src", "imgs/bola.jpg");
    }
}

function inicializarEspacos(){
    let espacos = document.getElementsByClassName("espaco");
    for(let i = 0; i < espacos.length; i++){
        espacos[i].addEventListener("click", function(){
            if (fimDeJogo){return;}

            if(this.getElementsByTagName("img").length == 0){
                if (quemTajogando == jogador1){
                    this.innerHTML = "<img id='safada' src='imgs/x.jpg'>";
                    this.setAttribute("jogada", jogador1);
                    quemTajogando = jogador2;
                } else {
                    this.innerHTML = "<img id='safada' src='imgs/bola.jpg'>";
                    this.setAttribute("jogada", jogador2);
                    quemTajogando = jogador1;
                }
                atualizaJogo();
                verificarVencedor();
            }
        });
    }
}

function verificarVencedor(){
    let a1 = document.getElementById("a1").getAttribute("jogada");
    let a2 = document.getElementById("a2").getAttribute("jogada");
    let a3 = document.getElementById("a3").getAttribute("jogada");
    
    let b1 = document.getElementById("b1").getAttribute("jogada");
    let b2 = document.getElementById("b2").getAttribute("jogada");
    let b3 = document.getElementById("b3").getAttribute("jogada");
    
    let c1 = document.getElementById("c1").getAttribute("jogada");
    let c2 = document.getElementById("c2").getAttribute("jogada");
    let c3 = document.getElementById("c3").getAttribute("jogada");

    let = vencedor = "";

    switch(fimDeJogo == false) {
        case  (a1 == b1 && a1 == c1 && a1 != ""):
          vencedor = a1;
          break;
        case (a2 == b2 && a2 == c2 && a2 != ""):
          vencedor = a2;
          break;
        case (a3 == b3 && a3 == c3 && a3 != ""):
            vencedor = a3;
            break; 
        case (a1 == a2 && a1 == a3 && a1 != ""):
            vencedor = a1;
            break;
        case (b1 == b2 && b1 == b3 && b1 != ""):
            vencedor = b1;
            break;

        case (c1 == c2 && c1 == c3 && c1 != ""):
            vencedor = c1;
            break;
        case (a1 == b2 && a1 == c3 && a1 != ""):
            vencedor = a1;
            break;
        case (c1 == b2 && c1 == a3 && c1 != ""):
            vencedor = c1;
            break;
        default:
        console.log('passou aqui');
      } 

   
   

    if (vencedor != ""){
        fimDeJogo = true;
        alert("Vitoria do: " + vencedor);
    }
}

function reiniciarJogo(){
    fimDeJogo = false;
    quemTajogando = jogador1;
    
    let espacos = document.getElementsByClassName("espaco");
    for(let i = 0; i < espacos.length; i++){
             

        espacos[i].getElementsByTagName("img").innerHTML = "<img id='safada' src=''>";               
        () => {
            console.log(this.i);     
            espacos[i].setAttribute('jogada','');
        }
        let el = document.getElementById('safada');
        if (el != null){el.remove();}
    }
    atualizaJogo();
    
}

atualizaJogo();
inicializarEspacos();