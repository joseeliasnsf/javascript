salario = parseFloat(prompt("Entre com o salario: "));
totvendas = parseFloat(prompt("Entre com o total de vendas: "));
comissao = totvendas * 15 / 100;
console.log("A comissao é: " + comissao);
console.log("O salario final é: " + (salario + comissao));