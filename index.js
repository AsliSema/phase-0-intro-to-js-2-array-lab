// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.splice(3, 0, name)
}
function destructivelyPrependCat(name){
    cats.splice(0, 0, name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    return [...cats, name]
}
function prependCat(name){
    return [name, ...cats]
}
function removeLastCat(){
    const copyCats = [...cats]
    copyCats.pop()
    return copyCats
}
function removeFirstCat(){
    const copyCats = [...cats]
    copyCats.shift()
    return copyCats
}


