//Função que altera o número de valores para seleção conforme a operação
function mudarOpcao(){
    operador = document.querySelector("input[name=opcao]:checked").value;
    if(operador != "quadratica"){
        document.getElementById("valor3_div").style.display = "none";
    }

    else{
        document.getElementById("valor3_div").style.display = "block";
    }
}

//Calcula de acordo com os valores disponíveis
function calcular(){
    operador = document.querySelector("input[name=opcao]:checked").value;
    if(operador != "quadratica"){
        valor1 = document.getElementById("valor1");
        valor2 = document.getElementById("valor2");
        resultado = eval(parseInt(valor1) + operador + parseInt(valor2));
        document.getElementById("mostrar_resultado").innerHTML = resultado;
    }

    else{
        valor1 = getElementById("valor1");
        valor2 = getElementById("valor2");
        valor3 = getElementById("valor3");
    }
}