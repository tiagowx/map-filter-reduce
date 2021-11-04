function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    })
}

const arr = [1, 2];

console.log(arr, somaNumeros(arr));

const lista = [{
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12,
    }, {
        nome: 'toalha',
        preco: 30,
    }
]

const saldo = 100;

function calcula(saldo, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada ', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldo)
}

console.log(calcula(saldo, lista));


// O 'reduce' recebe um callback como argumento que utiliza o primeiro prametro para identificar tratamento anterior e o segundo para identificar o tratamento atual enquanto percorre o array. Como segundo parametro ele recebe a variável que será tratada.