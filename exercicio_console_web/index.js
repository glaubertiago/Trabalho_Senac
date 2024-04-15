//let nome = prompt("qual seu nome?")
//let sobrenome = prompt ('qual seu sobrenome?")
//alert ('Seu nome é $ (nome) e seu sobrenome é $ (sobrenome)')

const primeiroNome = "Glauber"
const segundoNome = "Tiago"
const idadeNumero = "39"
const serEstudante = "Sim"
console.log ("O seu nome é", primeiroNome,"e o seu sobrenome é",segundoNome,"a sua idade é", idadeNumero, "anos.", "É estudante?", serEstudante)

// Recebeu as variaveis    
let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
//MENSAGEM: Digite as horas que você trabalha:
let horasTrabalho = prompt("Digite as horas que você trabalha por dia")
let salarioDia = prompt("Digite o seu salário diário: ")
// verificando as variáveis
console.log(typeof nome)
console.log(typeof horasTrabalho)
console.log(typeof salarioDia)
//Convertendo o que é necessario
let horasTrabNumber = Number(horasTrabalho)    
let salDiaNumber = Number(salarioDia)  
//Processando valores   
let valHoraNumber = horasTrabNumber/salDiaNumber     
// Conversão para nao dar erro de NULL  
let valorHora = String (valHoraNumber) 
const mensagem = "Seu valor hora e" + valorHora + "!!!"
//Verificando variáveis 
console.log(typeof valorHora)
console.log(typeof mensagem)
console.log(mensagem)
//Saida de valores para Front End   
alert(mensagem)

