var inserirTexto = document.getElementById('inserirTexto');
var retornoTexto = document.getElementById('retornoTexto');

function criptografar(){
    document.getElementById("semInfo").style.display = "none";
    document.getElementById("texto").style.display = "flex";

    if((inserirTexto.value).includes("e") || (inserirTexto.value).includes("i") || (inserirTexto.value).includes("a") || (inserirTexto.value).includes("o") || (inserirTexto.value).includes("u")){
        var criptogradado = (inserirTexto.value).replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

        retornoTexto.innerHTML = criptogradado.toLowerCase();
    }
    else{
        retornoTexto.innerHTML = "Não é possível criptografar o texto";
    }
}

function descriptografar(){
    document.getElementById("semInfo").style.display = "none";
    document.getElementById("texto").style.display = "flex";

    if((inserirTexto.value).includes("enter") || (inserirTexto.value).includes("imes") || (inserirTexto.value).includes("ai") || (inserirTexto.value).includes("ober") || (inserirTexto.value).includes("ufat")){
        var descriptogradado = (inserirTexto.value).replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

        retornoTexto.innerHTML = descriptogradado.toLowerCase();
    }
    else{
        retornoTexto.innerHTML = "Não é possível descriptografar o texto";
    }
}

function copiar(){
    navigator.clipboard.writeText(retornoTexto.value);
}