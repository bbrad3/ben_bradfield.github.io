// IMPLIMENT CLOSERS ***
// IMPLIMENT OOP?


// SELECT FROM DOM
let colorsDisplay = document.querySelector("#colorsDisplay");
let savedDisplay = document.querySelector("#savedDisplay");
let selectColors = document.querySelector(".selectColors");
let populateBtn = document.querySelector("#populateBtn");
let recycleBtn = document.querySelectorAll(".recycleBtn");
let colorDiv = document.querySelectorAll(".colorDiv");
let textSpan = document.querySelectorAll(".textSpan");
let color = "#";
let savedArr = [];
let colorPallet = [ "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"];


// EVENT LISTENERS
document.addEventListener("keypress", function(e){
    if(e.code === "Space"){
        e.preventDefault();
        buildPallet();
    }
});

colorsDisplay.addEventListener("click", function(e){
    let item = e.path;
    if(item[0].className === "saveImg"){
        saveColor(item);
    }
});

savedDisplay.addEventListener("click", function(e){
    let item = e.path;
    if(item[0].className === "recycleBtn"){
        recycleDiv(item);
    } else if(item[0].className === "assignBtn"){
        selectHighlight(item);
    }
});

selectColors.addEventListener("click", function(e){
    let item = e.path;
    if(item[0].className === "chooseBtn" && highlightColor.length > 1){
        assignColor(item);
    }
});

populateBtn.addEventListener("click", mockWebsite);

// BUILDS 1 HEX COLOR
function randomColor(){ 
    const hexVariables = "0123456789abcdef";
    const hexChar = hexVariables.split("");

    for(var j = 0; j < 6; j++){
        let randomChar = Math.floor(Math.random()*16);
        color += hexChar[randomChar];
    }
}

// FUNC TO CREATE 5 COLORS AND REPLACE IN ARRAY
function buildPallet(){
    for(var i = 0; i < colorPallet.length; i++){
        randomColor();
        colorPallet[i] = color;
        color = "#";
    }
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
    let recycleImg = document.createElement("img");
    let assignImg = document.createElement("img");

    savedDiv.setAttribute("style", "background-color: " + hexColor + ";");
    savedDiv.classList.add("savedColor");

    savedSpan.innerText = hexColor;

    assignImg.classList.add("assignBtn");
    assignImg.setAttribute("src", "./png/005-app.png");
    recycleImg.classList.add("recycleBtn");
    recycleImg.setAttribute("src", "./png/004-recycle.png");

    savedDisplay.appendChild(savedDiv);
    savedDiv.appendChild(savedSpan);
    savedDiv.appendChild(assignImg);
    savedDiv.appendChild(recycleImg);
}

// ADD TO "SAVED" ARRAY
function saveColor(item){
    let hexColor = item[1].innerText;
    savedArr.push(hexColor);
    displaySavedPallet(hexColor);
}

// RECYCLE/DELETE SAVEDCOLOR DIV
function recycleDiv(item){
    let savedDiv = item[0].parentElement;
    
    savedDiv.remove();
}

// SAVE SELECTED COLOR AND ADD HIGHLIGHT CLASS
let highlightColor = "";
let savedColors = document.querySelectorAll(".savedColor");
function selectHighlight(item){
    savedColors = document.querySelectorAll(".savedColor");
    if(item[1].classList[1] === "highlighted"){
        item[1].classList.remove("highlighted");
        highlightColor = "";
    } else if(item[1].classList[1] !== "highlighted"){
        savedColors.forEach(function(savedColor){
            savedColor.classList.remove("highlighted");
        });
        item[1].classList.add("highlighted");
        highlightColor = item[1].innerText;
    }
}


// USE SAVED COLOR TO ASSIGN EACH COLOR
let mockArr = [];
function assignColor(item){
    console.log(item); 
    if(item[0].id === "choose1"){
        mockArr[0] = highlightColor;
        item[1].children[0].innerText = highlightColor;
        item[1].setAttribute("style", "background-color: " + highlightColor + ";");
    } else if(item[0].id === "choose2"){
        mockArr[1] = highlightColor;
        item[1].children[0].innerText = highlightColor;
        item[1].setAttribute("style", "background-color: " + highlightColor + ";");
    } else if(item[0].id === "choose3"){
        mockArr[2] = highlightColor;
        item[1].children[0].innerText = highlightColor;
        item[1].setAttribute("style", "background-color: " + highlightColor + ";");
    } else if(item[0].id === "choose4"){
        mockArr[3] = highlightColor;
        item[1].children[0].innerText = highlightColor;
        item[1].setAttribute("style", "background-color: " + highlightColor + ";");
    } else if(item[0].id === "choose5"){
        mockArr[4] = highlightColor;
        item[1].children[0].innerText = highlightColor;
        item[1].setAttribute("style", "background-color: " + highlightColor + ";");
    }
    console.log(mockArr);
}

// DISPLAY FINAL COLORS ON MOCKWEBSITE
function mockWebsite(){
    const navbar = document.querySelector(".navbar");
    navbar.setAttribute("style", "background-color: " + mockArr[0] + "!important;");

    const jumbo = document.querySelector(".jumbotron");
    jumbo.setAttribute("style", "background-color: " + mockArr[1] + "!important;");

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.setAttribute("style", "background-color: " + mockArr[2] + "!important;");
    })

    const webContainer = document.querySelector("#webContainer");
    webContainer.setAttribute("style", "background-color: " + mockArr[3] + "!important;");

    const body = document.querySelector("#mockWebsite");
    body.setAttribute("style", "color: " + mockArr[4] + "!important;");

    
}
