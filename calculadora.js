
function setNum(num){
var visor = document.querySelector('#visor'); /* para printar na tela o que foi recebido pelo botao */
visor.innerText += num;

}

function setSinal(oper){
   
    var visor = document.querySelector('#visor');
    visor.innerText += oper; /*  += é para printar na tela a informaçâo sem apagar a anterior */


   
}



function calcular(){
    var visor = document.querySelector('#visor').innerHTML;
    var calc = eval(visor); /* o metodo eval é usado para levar em consideração apenas o que sao numeros e sinais de matematica */

    
    var resultado = +calc;
    
    visor = document.querySelector('#visor');
    visor.innerText = 'Resultado: ' + resultado;
}  
