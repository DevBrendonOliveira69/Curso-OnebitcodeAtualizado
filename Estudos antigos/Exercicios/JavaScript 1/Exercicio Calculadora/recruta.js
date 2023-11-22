const primeiroNome = prompt("informe o primeiro nome: ")
const sobreNome = prompt("Informe o sobrenome: ")
const campoDeEstudo = prompt("Qual é o campo de estudo? ")
const anoDeNascimento = prompt("Informe o ano do seu nascimento:")

alert( 
  "Recruta cadastrado com sucesso!\n" +
  "Nome completo: " +primeiroNome +" "+ sobreNome +
  "\n Campo de estudo: " +campoDeEstudo+
  "\n Idade: " + (2023 - anoDeNascimento)
)