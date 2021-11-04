const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

result = frutas.filter((fruta) => {
    console.log(fruta.includes('maçã'));
    return fruta.includes('maçã');
});
// passa-se um callback como argumento que recebe o item do array como parametro retornando um novo array baseado nas condições propostas
console.log(frutas, result)