// calling different dice from HTML 
let d4 = document.getElementById('fourSidedDie');
let d6 = document.getElementById('sixSidedDie');
let d8 = document.getElementById('eightSidedDie');
let d10 = document.getElementById('tenSidedDie');
let d12 = document.getElementById('twelveSidedDie');
let d20 = document.getElementById('twentySidedDie');
// adds clicking on the different die imgs to roll
d4.addEventListener("click", function (){rollDice(d4)});
d6.addEventListener("click", function (){rollDice(d6)});
d8.addEventListener("click", function (){rollDice(d8)});
d10.addEventListener("click", function (){rollDice(d10)});
d12.addEventListener("click", function (){rollDice(d12)});
d20.addEventListener("click", function (){rollDice(d20)});

function rollDice(dicePicked){

    // initalizes the variable "maxValue"
    // if it passes through the switch without triggering any case it won't be null and crash
    var maxValue = "Nothing";

    // for switching between the different dice
    // "switch" goes through different "case" to select a specific die type
    // maxValue tells it the max number "Math.random" can use
    switch(dicePicked.id){
        case "fourSidedDie":
        maxValue = 4;
        break;
        
        case "sixSidedDie":
        maxValue = 6;
        break;
        
        case "eightSidedDie":
        maxValue = 8;
        break;
        
        case "tenSidedDie":
        maxValue = 10;
        break;
        
        case "twelveSidedDie":
        maxValue = 12;
        break;
        
        case "twentySidedDie":
        maxValue = 20;
        break;
    }
    // Randomize Dice
    // "Math.random" = random number
    // "Math.floor" = rounded to whole number
    var random = Math.floor(Math.random() * maxValue+1);

    // speaking to the console to make sure that everything is working
    console.log("Random Value is " + random);

    //img changer
    // grabs the img placeholder with "document.getElementById("die")"
    // "dicePicked.id" uses the name of the cases to call the dice from the folder they are in.
    // "random+dicePicked.id" adds the random number picked from "Math.random" and adds it to the name of the dice file it has selected to pull that specific img
    document.getElementById('die').src = "imgs/defaultDie/"+dicePicked.id+"/"+random+dicePicked.id+".png";
}