var minhaString = "Olá, mundo!";

console.log("Comprimento da string:", minhaString.length);

var stringMaiuscula = minhaString.toUpperCase();
console.log("String em maiúsculas:", stringMaiuscula);

var palavras = minhaString.split(" ");

console.log("Palavras na string:");
for (var i = 0; i < palavras.length; i++) {
    console.log(palavras[i]);
}