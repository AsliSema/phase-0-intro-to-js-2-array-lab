// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(animals) {
    cats.splice(3, 0, "Ralph")
    return animals
}
function destructivelyPrependCat(animals){
    cats.splice(0, 0, "Bob")
    return animals
}
function destructivelyRemoveLastCat(animals){
    cats.pop()
    return animals
}
function destructivelyRemoveFirstCat(animals){
    cats.shift()
    return animals
}
function appendCat(animals){
    return [...cats, "Broom"]
}
function prependCat(animals){
    return ["Arnold", ...cats]
}
function removeLastCat(animals){
    const copyCats = [...cats]
    copyCats.pop()
    return copyCats
}
function removeFirstCat(animals){
    const copyCats = [...cats]
    copyCats.shift()
    return copyCats
}

destructivelyUpdateObject(cats)
destructivelyPrependCat(cats)
destructivelyRemoveLastCat(cats)
destructivelyRemoveFirstCat(cats)
appendCat(cats)
prependCat(cats)
removeLastCat(cats)
