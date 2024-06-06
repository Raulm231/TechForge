aplicacao = 1000;
taxaJuros = 7%1000;
periodo = 16;
jurosTotal = 0;

for (i=0;i<periodo;i++) {
    jurosSimples=aplicacao * taxaJuros/100
    console.log("Este é o juros simples mensal" + jurosSimples)
    jurosTotal=jurosTotal + jurosSimples
    aplicacao+=jurosSimples
}
console.log("Este é o Valor final do Juros: " + jurosTotal); 