export {}

let hello: string = "Hello, World!";
console.log(hello);

let x: number = 1;

let y: string = "Hello"

//Choice 1: Make code wait until async code is executed with returned
// value before proceeding
// Async / Await (with Try/catch)

try {
    let pokemon: any = await getPokemonFromDatabase();
    console.log("Line 16 ran!")
    console.log(pokemon)
}
catch (error) {
    console.log("This is our error")
    console.log(error);
}

// Make async code run in the background and continue executing the rest
// of the code as usual

let pokemon = getPokemonFromDatabase()
.then((dataFromPromise) => {
    //Do with data whats needed
    let arrayData = dataFromPromise.split('')
    return arrayData
})
.then((arrayData: string[]) => {
    console.log("Data from Database")
    console.log(arrayData)
})
.catch(err => console.log(err))



async function getPokemonFromDatabase(): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("timer expired!")
            //resolve("Pikachu")
            reject({error: 400, message: "Malware detected"})
        }
        ,5000)
    })
}

// ________________________________________________________________

const pokemonQuery = "pikachu"

let API_URL = "https://www.pokeapi.co/api/v2/pokemon/"

let response = await fetch(API_URL + pokemonQuery)

console.log(response.json{})