//Loops (laçoes de repetição)

//for é movido por declaração
for (var a = 0; a < 10; a++) {
    console.log('Repetindo por ${a} é menor que 10.')
}

//while é movido por uma condição e fica no laço enquanto esta condição for true (verdadeiro)
var i = 0;

while(i <= 10) {
    console.log('Repetindo por ${i} é menor ou igual que 10.')
    i++;
}

//forEach
var avengers = ['Ironman', 'Spiderman', 'Thor', 'Captian America', 'Black Panther', 'Black Window']

avengers.forEach(function(value, key) {
    console.log('${value} na posição ${key}')
})