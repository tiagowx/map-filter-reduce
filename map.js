const array = [1, 2, 3, 4, 5];

result = array.map((item) => item * 2);
// passa-se um callback como argumento que recebe o item do array com o parametro retornando o resultado gerado sem modificar o 'array'
console.log(array, result)