

// *** SCREEN SELECTORS
let hangS = document.getElementById('hangS');
let pauseS = document.getElementById('pauseS');
let restS = document.getElementById('restS');
let roundNow = document.getElementById('roundNow');
let roundsS = document.getElementById('roundsS');
let setNow = document.getElementById('setNow');
let setsS = document.getElementById('setsS');

let timerBtn = document.getElementById('timerBtn');

// set VARIABLES
let startValues = {
    hang: 7,
    pause: 3,
    rest: 180,
    rounds: 5,
    sets: 3
}

// newGame sets initial values? 
hangS.innerHTML = startValues.hang;
pauseS.innerHTML = startValues.pause;
restS.innerHTML = startValues.rest;

// *** AUDIO
var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
var audio3 = document.getElementById('audio3');

// *** EVENT LISTENERS
window.onload = () => {
    const controlForm = document.querySelector("#controlForm");

    controlForm.addEventListener("submit", (event) => {
        event.preventDefault();
        runWorkout.reset();
        // GET VALUES
        const hangT = document.getElementById("hangT").value;
        const pauseT = document.getElementById('pauseT').value;
        const restT = document.getElementById('restT').value;
        const rounds = document.getElementById('rounds').value;
        const sets = document.getElementById('sets').value;
        // DISPLAY VALUES AND START OVER
        startValues.hang = hangT;
        startValues.pause = pauseT;
        startValues.rest = restT;
        startValues.rounds = rounds;
        startValues.sets = sets;

        newGame();
    });
    
    timerBtn.addEventListener("click", () => {
        // audio3.play();
        if(!runWorkout.gameOver && !runWorkout.running){
            alert("GET READY!");
            runWorkout.hang();
            runWorkout.running = true;
        } else {
            alert("Press New Workout button to start again.");
        }
    });
};

function newGame() {
    // set screen
    hangS.innerHTML = startValues.hang;
    pauseS.innerHTML = startValues.pause;
    restS.innerHTML = startValues.rest;
    roundsS.innerHTML = startValues.rounds;
    setsS.innerHTML = startValues.sets;

    runWorkout.hangTime = startValues.hang;
    runWorkout.pauseTime = startValues.pause;
    runWorkout.restTime = startValues.rest;
    runWorkout.round = 1;
    runWorkout.set = 1;

    runWorkout.gameOver = false;
    runWorkout.running = false;
};

// runWorkout object
let runWorkout = {
    gameOver: false,
    running: false,

    hangTime: startValues.hang,
    pauseTime: startValues.pause,
    restTime: startValues.rest,
    round: 1,
    set: 1,

    hang: () => {
        console.log("hang...");
        console.log(startValues);
        let interval = setInterval(runHang, 1000);
        function runHang() {
            if(runWorkout.hangTime > 0 && !runWorkout.gameOver){
                hangS.innerHTML = runWorkout.hangTime - 1;
                runWorkout.hangTime--;
                console.log(runWorkout.hangTime);
            } else {
                clearInterval(interval);
                runWorkout.pause();
            }
        };
    },

    pause: () => {
        console.log("pause...");
        let interval = setInterval(runPause, 1000);
        function runPause() {
            if(runWorkout.pauseTime > 0 && !runWorkout.gameOver){
                pauseS.innerHTML = runWorkout.pauseTime - 1;
                runWorkout.pauseTime--;
                console.log(runWorkout.pauseTime);
            } else {
                clearInterval(interval);
                runWorkout.hangTime = startValues.hang;
                hangS.innerHTML = startValues.hang;
                runWorkout.pauseTime = startValues.pause;
                pauseS.innerHTML = startValues.pause;

                // next round
                if(runWorkout.round < startValues.rounds && !runWorkout.gameOver){
                    runWorkout.round++;
                    roundNow.innerHTML = runWorkout.round;
                    runWorkout.hang();
                } else { // to rest timer
                    runWorkout.rest();
                } 
            }
        };
        
    },

    rest: () => {
        console.log("rest...");
        let interval = setInterval(runRest, 1000);
        function runRest() {
            if(runWorkout.restTime > 0 && !runWorkout.gameOver){
                restS.innerHTML = runWorkout.restTime - 1;
                runWorkout.restTime--;
                console.log(runWorkout.restTime);
            } else {
                clearInterval(interval);
                runWorkout.restTime = startValues.rest;
                restS.innerHTML = startValues.rest;
                // next set
                if(runWorkout.set < startValues.sets && !runWorkout.gameOver){
                    runWorkout.set++;
                    setNow.innerHTML = runWorkout.set;
                    runWorkout.round = 1;
                    roundNow.innerHTML = runWorkout.round;
                    runWorkout.hang();
                } else { 
                    runWorkout.gameOver = true;
                    runWorkout.running = false;
                    alert("Workout complete!");
                }
            }
        };
        
    },

    reset: () => {
        if(runWorkout.running === true){
            location = location;
        }
    }
};
