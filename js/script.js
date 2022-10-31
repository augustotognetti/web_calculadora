//Função que altera os inputs de valores e informações conforme a operação
function mudarOpcao(){
    const operador = document.querySelector("input[name=opcao]:checked").value;
    if((operador == "+")||(operador == "-")||(operador == "*")){
        document.getElementById("valor3_div").style.display = "none";
        document.getElementById("label_valor_1").innerHTML = "Valor 1";
        document.getElementById("label_valor_2").innerHTML = "Valor 2";
    }
    else if(operador == "/"){
        document.getElementById("valor3_div").style.display = "none";
        document.getElementById("label_valor_1").innerHTML = "Dividendo";
        document.getElementById("label_valor_2").innerHTML = "Divisor";
    }
    else if(operador == "exponenciacao"){
        document.getElementById("valor3_div").style.display = "none";
        document.getElementById("label_valor_1").innerHTML = "Base";
        document.getElementById("label_valor_2").innerHTML = "Expoente";
    }
    else if(operador == "radiciacao"){
        document.getElementById("valor3_div").style.display = "none";
        document.getElementById("label_valor_1").innerHTML = "Radicando";
        document.getElementById("label_valor_2").innerHTML = "Índice da raiz";
    }
    else if(operador == "triangulo"){
        document.getElementById("valor3_div").style.display = "none";
        document.getElementById("label_valor_1").innerHTML = "Base";
        document.getElementById("label_valor_2").innerHTML = "Altura";
    }
    else{
        document.getElementById("valor3_div").style.display = "block";
        document.getElementById("label_valor_1").innerHTML = "Valor de A";
        document.getElementById("label_valor_2").innerHTML = "Valor de B";
        document.getElementById("label_valor_3").innerHTML = "Valor de C";
    }
}

//Calcula de acordo com os valores disponíveis
function calcular(){
    const operador = document.querySelector("input[name=opcao]:checked").value;
    if((operador == "+")||(operador == "-")||(operador == "*")||(operador == "/")){
        let valor1 = parseFloat(document.getElementById("valor1").value);
        let valor2 = parseFloat(document.getElementById("valor2").value);
        let resultado = eval(valor1 + operador + valor2);
        document.getElementById("mostrar_resultado").innerHTML = resultado;
    }
    else if(operador == "exponenciacao"){
        let valor1 = parseFloat(document.getElementById("valor1").value);
        let valor2 = parseFloat(document.getElementById("valor2").value);
        let resultado = Math.pow(valor1, valor2);
        document.getElementById("mostrar_resultado").innerHTML = resultado;
    }
    else if(operador == "radiciacao"){
        let valor1 = parseFloat(document.getElementById("valor1").value);
        let valor2 = parseFloat(document.getElementById("valor2").value);
        let resultado = Math.pow(valor1, 1 / valor2);
        document.getElementById("mostrar_resultado").innerHTML = resultado;
    }
    else if(operador == "triangulo"){
        let valor1 = parseFloat(document.getElementById("valor1").value);
        let valor2 = parseFloat(document.getElementById("valor2").value);
        let resultado = valor1 * valor2 / 2;
        document.getElementById("mostrar_resultado").innerHTML = resultado;
    }
    else{
        let a = parseFloat(document.getElementById("valor1").value);
        let b = parseFloat(document.getElementById("valor2").value);
        let c = parseFloat(document.getElementById("valor3").value);
        delta = Math.pow(b, 2) - 4 * a * c;
        if(delta > 0){
            let resultado1 = (-b + Math.sqrt(delta)) / (2 * a);
            let resultado2 = (-b - Math.sqrt(delta)) / (2 * a);
            document.getElementById("mostrar_resultado").innerHTML = resultado1 + " e " + resultado2;
        }
        else if(delta < 0){
            let parte_real = -b / (2 * a);
            let parte_complexa = (Math.sqrt(-delta) / (2 * a));
            document.getElementById("mostrar_resultado").innerHTML = parte_real + " + " + parte_complexa + "√(-1)" + " e " + parte_real + " - " + parte_complexa + "√(-1)";
        }
        else{
            let resultado1 = (-b) / 2 * a;
            document.getElementById("mostrar_resultado").innerHTML = resultado1;
        }
    }
}