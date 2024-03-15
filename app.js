/*let texto = document.querySelector('h5');
texto.innerHTML = 'Testando o valor no javascript';*/

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h5', 'texto para testes!!!!!');

// Função para validar se tem caracteres especiais ou acento no texto.
function temAcentosOuEspeciais(texto) {
    // Expressão regular para verificar se há caracteres acentuados ou especiais
    const regex = /\W|_/;

    // Testa se o texto contém caracteres que não estão no intervalo ASCII básico
    return regex.test(texto);
}

function todasMinusculas(texto) {
    // Expressão regular para verificar se há letras maiúsculas
    const regex = /[A-Z]/;

    // Testa se o texto contém letras maiúsculas
    return regex.test(texto);
}

// Função para verificar se o texto esta vazio.
function textoEstaVazio(texto) {
    return texto.trim() === '';
}

// Função para criptografar o texto
function criptografar(texto) {
    // Substituir cada letra de acordo com as regras
    let textoCriptografado = texto.replace(/e/g, 'enter');
    textoCriptografado = textoCriptografado.replace(/i/g, 'imes');
    textoCriptografado = textoCriptografado.replace(/a/g, 'ai');
    textoCriptografado = textoCriptografado.replace(/o/g, 'ober');
    textoCriptografado = textoCriptografado.replace(/u/g, 'ufat');
    return textoCriptografado;
}

// Função para descriptografar o texto
function descriptografar(textoCriptografado) {
    // Substituir cada padrão criptografado de volta para as letras originais
    let texto = textoCriptografado.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    return texto;
}

// Função completa para o botão de criptografar o texto.
function criptografarTexto(){
    let cripto          = document.querySelector('textarea').value;   
    let validarTexto    = todasMinusculas(cripto); 
    let validaEspeciais = temAcentosOuEspeciais(cripto);
    let validaVazio     = textoEstaVazio(cripto);

    switch (true){
        case validaVazio:
            alert('Favor digitar um texto!');
            document.getElementById("img").style.display = "hidden"; 
            break;
        case validaEspeciais:
            alert('Caracteres especiais e letras acentuadas não são permitidas!');
            document.getElementById("img").style.display = "hidden"; 
            break;
        case validarTexto:
            alert('Favor digitar somente letras minúsculas!'); 
            document.getElementById("img").style.display = "hidden"; 
            break;
        default:
            let tCriptografado = criptografar(cripto);
            console.log(tCriptografado); 
            exibirTextoNaTela('div', tCriptografado);             
            //document.getElementById("img").style.display = tCriptografado; 
            break;       
    }
}

function descriptografarTexto(){
    let textoCripto           = document.querySelector('textarea').value;   
    let validarTextoCripto    = todasMinusculas(textoCripto); 
    let validaEspeciaisCripto = temAcentosOuEspeciais(textoCripto);
    let validaVazioCripto     = textoEstaVazio(textoCripto);

    switch (true){
        case validaVazioCripto:
            alert('Favor digitar um texto!');
            break;
        case validaEspeciaisCripto:
            alert('Caracteres especiais e letras acentuadas não são permitidas!');
            break;
        case validarTextoCripto:
            alert('Favor digitar somente letras minúsculas!'); 
            break;
        default:
            let descriptografado = descriptografar(textoCripto);
            console.log(descriptografado); 
            break;
    }     
     
 }