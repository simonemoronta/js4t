//var avengers = new Array();
var avengers = ['Homen de ferro', 'Capitão América', 'Thor']
console.log(typeof avengers)
console.log(avengers)

//push - adicionar itens dentro do array
avengers.push('Hulk')
console.log(avengers)

//pop - remove o último registro do meu array
//shift - remove o primeiro registro do meu array

avengers.push('Homem aranha')
// avengers.pop();
// avengers.shift();

var indice = avengers.indexOf('Homem Aranha')
avengers.splice(indice)

avengers.push('Viúva Negra')
avengers.push('Gavião Arqueiro')

console.log(avengers)

var newAvengers = ['Homem Aranha', 'Capitã Marvel', 'Miss Marvel', 'Pantera Negra']
var result = avengers.concat(newAvengers)
console.log(result)