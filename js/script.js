document.getElementsByName("opcao").onclick = function() {mudar_placeholder()};

function mudar_placeholder(){

    valor_radio = document.querySelector("input[name=opcao]:checked").value;
    document.getElementById("mostrar_resultado").innerHTML = valor_radio;

}