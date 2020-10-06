console.log("hello from console");

var gameOver = false;

// *** INPUT SELECTORS
var hangT = document.getElementById('hangT');
var pauseT = document.getElementById('pauseT');
var restT = document.getElementById('restT');
var rounds = document.getElementById('rounds');
var sets = document.getElementById('sets');

// *** SCREEN SELECTORS
var hangS = document.getElementById('hangS');
var pauseS = document.getElementById('pauseS');
var restS = document.getElementById('restS');
var roundNow = document.getElementById('roundNow');
var roundsS = document.getElementById('roundsS');
var setNow = document.getElementById('setNow');
var setsS = document.getElementById('setsS');
var timerBtn = document.getElementById('timerBtn');

// set VARIABLES
var hT = 7;
var pT = 3;
var rT = 10;
var rSet = 5;
var sSet = 3;
var roundNum = 1;
var setNum = 1;
var hangTime = hT;
var pauseTime = pT;
var restTime = rT;
hangS.textContent = hT;
pauseS.textContent = pT;
restS.textContent = rT;

// *** AUDIO
var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
var audio3 = document.getElementById('audio3');

// *** EVENT LISTENERS
// watch for change
hangT.addEventListener("change", function(){
    // save input value
    hT = hangT.value;
    //set value to screen
    if(hT < 0) {
        alert("Input can't be negative number!");
    } else {
        // hangS.textContent = hT;
    }
})
pauseT.addEventListener("change", function(){
    pT = this.value;
    if(pT < 0) {
        alert("Input can't be negative number!");
    } else {
        pauseS.textContent = pT;
    }
})
restT.addEventListener("change", function(){
    rT = this.value;
    if(rT < 0) {
        alert("Input can't be negative number!");
    } else {
        restS.textContent = rT;
    }
})
rounds.addEventListener("change", function(){
    rSet = this.value;
    if(rSet < 0) {
        alert("Input can't be negative number!");
    } else {
        roundsS.textContent = rSet;
    }

})
sets.addEventListener("change", function(){
    sSet = this.value;
    if(sSet < 0) {
        alert("Input can't be negative number!");
    } else {
        setsS.textContent = sSet;
    }
})

timerBtn.addEventListener("click", function(){
    alert("GET READY!");
    audio3.play();
    hangTimer();
})

// *** FUNCTIONS, TIMERS
// create countdown(1s interval) from input to 0.

function hangTimer() {
    if(hangTime < 0){
        // stop timer *don't need to!
        audio1.play();
        //reset clock
        hangTime = hT;
        pauseTime = pT;
        //start next timer
        pauseTimer();
    } else {
        hangS.textContent = hangTime;
        hangTime--;
        setTimeout(hangTimer, 1000);
        console.log(hangTime);
    }
}




function pauseTimer() {
    // done with sets? :gameOver
    if(pauseTime < 0 && setNum > sSet){
        gameOver = true;
        alert("WORKOUT COMPLETE!");
    // done with rounds? :next set, go to restTimer
    } else if(pauseTime < 0 && roundNum === rSet){
        console.log("go to restTimer");
        audio1.play();
        restTimer();
    // not done with rounds? :next round, go to hangTimer
    } else if(pauseTime < 0 && roundNum <= rSet){
        hangTime = hT;
        pauseTime = pT;
        roundNum += 1;
        audio2.play();
        hangTimer();
    // countdown of pauseTimer
    } else {
        pauseS.textContent = pauseTime;
        pauseTime--;
        setTimeout(pauseTimer, 1000);
        console.log(pauseTime);
    }
    roundNow.textContent = roundNum;
    setNow.textContent = setNum;
}

function restTimer() {
    // done with sets? :gameOver
    if(restTime < 0 && setNum === sSet){
        gameOver = true;
        audio3.play();
        alert("WORKOUT COMPLETE!");
    // not done with sets? :next set, go to hangTimer, resets
    } else if(restTime < 0 && setNum < sSet){
        alert("go to hangTimer! Next set!");
        setNum++;
        pauseTime = pT;
        roundNum = 1;
        audio1.play();
        hangTimer();
    // countdown of restTimer
    } else {
        restS.textContent = restTime;
        restTime--;
        setTimeout(restTimer, 1000);
        console.log(restTime);
    }
    roundNow.textContent = roundNum;
    setNow.textContent = setNum;
}