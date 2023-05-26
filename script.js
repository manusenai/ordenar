function ordenarPalavras() {
    var inputElement = document.getElementById("palavras");
    var palavras = inputElement.value.split(",").map(function (palavra) {
        return palavra.trim();
    });
    var listaOrdenada = palavras.sort();
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = listaOrdenada.join(", ");
}
