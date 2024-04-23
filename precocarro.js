precofab = parseFloat(prompt("Entre com o preço de fabrica: "));
precoimp = (precofab * 0.45);
precoven = (precofab * 0.28);
precofinal = (precofab + precoimp + precoven);
console.log("O preço final do carro é: " + precofinal);