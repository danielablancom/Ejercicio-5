// Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
let pokemones = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'];

let newPokemones = pokemones.map(element => element.toUpperCase());
console.log(newPokemones);


// Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.
let pokemonesArray = [
    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]

const pokemonesTipoFuego = pokemonesArray.filter(element => element.tipo === "Fuego")

console.log(pokemonesTipoFuego)


// Secuencia Fibonacci 

let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for (let i = 2; i < 17; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];

}
console.log("fibonacci", fibonacci);


// Secuencia Fibonacci Par

let fibonacciPar = [];
fibonacciPar[0] = 0;
fibonacciPar[1] = 2;
for (let i = 2; i < 16; i++) {
    fibonacciPar[i] = fibonacciPar[i - 2] + fibonacciPar[i - 1];
}
console.log("fibonacci Par", fibonacciPar);


// Secuencia Fibonacci ImPar

let fibonacciImpar = [];
fibonacciImpar[0] = 0;
fibonacciImpar[1] = 1;

for (let i = 2; i < 17; i++) {
    fibonacciImpar[i] = fibonacciImpar[i - 2] + fibonacciImpar[i - 1];
    if (fibonacciImpar[i] % 2 !== 0) {
        let resultado = fibonacci[i]++;
        console.log("fibonacci ImPar", resultado);
    }
}



