console.log('hi from console')

// GET FORM ON SUBMIT
const submitBtn = document.querySelector("#submitBtn");


// EVENT LISTENERS
submitBtn.addEventListener("click", parseColorSelect);

// SET VARIABLES
let rVal = 0;
let gVal = 0;
let bVal = 0;
let rgbVal = "";


// function generateColors(e){
//     // *** use to prevent form from submitting
//     e.preventDefault();

//     // GET FORM INPUTS
//     const colorSelect = document.querySelector("#colorSelect");
//     console.log(colorSelect.value);
//     const themeSelect = document.querySelector("#themeSelect");
//     console.log(themeSelect.value);

//     // GENERATE A RANDOM RGB COLOR
//     rVal = Math.floor(Math.random()*256);
//     gVal = Math.floor(Math.random()*256);
//     bVal = Math.floor(Math.random()*256);
// }

function parseColorSelect(e){
    // *** use to prevent form from submitting
    e.preventDefault();

    const colorSelect = document.querySelector("#colorSelect");

    if(colorSelect.value === "red"){
        rVal = (Math.floor(Math.random()*56)+200);
        gVal = Math.floor(Math.random()*121);
        bVal = Math.floor(Math.random()*121);
    } else if(colorSelect.value === "green"){
        rVal = Math.floor(Math.random()*121);
        gVal = (Math.floor(Math.random()*56)+200);
        bVal = Math.floor(Math.random()*121);
    } else if(colorSelect.value === "blue"){
        rVal = Math.floor(Math.random()*121);
        gVal = Math.floor(Math.random()*121);
        bVal = (Math.floor(Math.random()*56)+200);
    } else if(colorSelect.value === "yellow"){
        rVal = gVal = (Math.floor(Math.random()*56)+200);
        bVal = Math.floor(Math.random()*121);
    } else if(colorSelect.value === "violet"){
        rVal = bVal = (Math.floor(Math.random()*56)+200);
        gVal = Math.floor(Math.random()*121);
    } else if(colorSelect.value === "indigo"){
        gVal = bVal = (Math.floor(Math.random()*56)+200);
        rVal = Math.floor(Math.random()*121);
    } else if(colorSelect.value === "orange"){
        rVal = (Math.floor(Math.random()*56)+200);
        gVal = (Math.floor(Math.random()*101)+100)
        bVal = Math.floor(Math.random()*51);
    } else if(colorSelect.value === "gray"){
        rVal = gVal = bVal = Math.floor(Math.random()*256);
    }

    rgbVal = "rgb(" + rVal + ", " + gVal + ", " + bVal + ")";
    console.log(rgbVal);
    // parseThemeSelect(e);
    displayColors();
}

// function parseThemeSelect(e){
//     // *** use to prevent form from submitting
//     e.preventDefault();

//     const themeSelect = document.querySelector("#themeSelect");

//     if(themeSelect.value === "light"){
        
//     } else if(themeSelect.value === "dark"){

//     } else {

//     }
// }

function displayColors(){
    const colorsDisplay = document.querySelector("#colorsDisplay");
    const color1 = document.querySelector("#color1");
    const color2 = document.querySelector("#color2");
    const color3 = document.querySelector("#color3");

    color1.setAttribute("style", "background-color: " + rgbVal + ";");
    color1.innerHTML = "<span>" + rgbVal + "</span>";

    function complimentColor(){
        // these are global variables
        rComp = 255 - rVal;
        gComp = 255 - gVal;
        bComp = 255 - bVal;
        rgbComp = "rgb(" + rComp + ", " + gComp + ", " + bComp + ")";
    }
    complimentColor();
    color2.setAttribute("style", "background-color: " + rgbComp + ";");
    color2.innerHTML = "<span>" + rgbComp + "</span>";


}