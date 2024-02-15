//alert("Hi");

function shake() {
    //alert("Signs Point To Yes")
    var myFortune = getFortune()
    displayFortune(myFortune)
}

function displayFortune(fortune) {
    //alert(fortune)
    document.getElementById("fortune-display").innerHTML = fortune
}

function getFortune() {
    var ListOfFortunes = getListOfFortunes()
    var randomNumber = getRandomNumberLessThan(ListOfFortunes.length)

    return ListOfFortunes[randomNumber]
}

function getListOfFortunes(){
    return ["yaur","naur","maybeeeee","ask me lateer","absolutely not","100% queen","Ummmmmmm"]
}

function getRandomNumberLessThan(max) {
    var randomDecimal = (Math.random() * max)
    return Math.floor(randomDecimal)
}