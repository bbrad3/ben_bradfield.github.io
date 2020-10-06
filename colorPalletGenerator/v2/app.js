// SELECT FROM DOM
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let color3 = document.querySelector("#color3");
let color4 = document.querySelector("#color4");
let color5 = document.querySelector("#color5");
let colorsDisplay = document.querySelector("#colorsDisplay");
let savedDisplay = document.querySelector("#savedDisplay");
let colorDiv = document.querySelectorAll(".colorDiv");
let textSpan = document.querySelectorAll(".textSpan");
let color = "#";

// EVENT LISTENERS
document.addEventListener("keypress", function(e){
    if(e.code === "Space"){
        buildPallet();
    }
});

colorsDisplay.addEventListener("click", function(e){
    let item = e.path;
    if(item[0].className === "saveImg"){
        saveColor(item);
    }
});

// COLOR PALLET ARRAY
let colorPallet = [];

// BUILDS 1 HEX COLOR
function randomColor(){ 
    const hexVariables = "0123456789ABCDEF";
    const hexChar = hexVariables.split("");

    for(var j = 0; j < 6; j++){
        let randomChar = Math.floor(Math.random()*16);
        color += hexChar[randomChar];
    }
    // return color;
}

// FUNC TO CREATE 5 COLORS AND PUSH TO ARRAY
function buildPallet(){
    for(var i = 0; i < 5; i++){
        randomColor();
        colorPallet[i] = color;
        color = "#";
    }
    console.log(colorPallet);
    displayPallet();
}

// DISPLAY PALLET
function displayPallet(){
    for(var i = 0; i < colorPallet.length; i++){
        colorDiv[i].setAttribute("style", "background-color: " + colorPallet[i] + ";");
    }
    for(var j = 0; j < textSpan.length; j++){
        textSpan[j].innerHTML = colorPallet[j];
    }
    
}

function displaySavedPallet(hexColor){
    let savedDiv = document.createElement("div");
    let savedSpan = document.createElement("span");

    savedDiv.setAttribute("style", "background-color: " + hexColor + ";");
    savedDiv.classList.add("savedColor");

    savedSpan.innerText = hexColor;

    savedDisplay.appendChild(savedDiv);
    savedDiv.appendChild(savedSpan);
}

// *** HOW TO LOCK A COLOR? ***
    // ADD TO "SAVED" ARRAY?
        // ADD 1 REMOVE 1 , how to choose which one to delete?
let savedArr = [];
function saveColor(item){
    console.log(item);
    let hexColor = item[1].innerText;
    savedArr.push(hexColor);
    console.log(savedArr);
    displaySavedPallet(hexColor);
}
    // RUN randomColor FOR EACH DIV IF NOT LOCKED!!


