const idadeMinima = 18;
const idadeCliente = 16;
//forma 1
if (idadeCliente >= idadeMinima) {
  console.log("cerveja")
} else {
  console.log("suco")
}

//FORMA 2   
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")