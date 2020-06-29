//Document Object Model
//Representa as marcações do html

// html => Pagina

// h1 = Cabeçalhos/ Títutlos
// p = Parágrafos
// ul = Agrupadores de Lista
// li = os itens de lista do elemento ul
// a = link
// form = formulários
// input do tipo texto = campos de texto
// input do tipo check = checkbox
// input do tipo radio = botões de radio
// textarea = paragrafos
// button = botões
// span = elementos genericos
// tables = tabelas
// tds = colunas
// divs = divisões
// labels = textos

function somaValores() {
    var n1 = document.getElementById("numberOne").value;
    var n2 = document.getElementById("numberTwo").value;

    var result = parseInt(n1) + parseInt(n2);

    var divResultado = document.getElementById("resultado");

    divResultado.append("O resultado da soma é:" + result)
    console.log(result)
}