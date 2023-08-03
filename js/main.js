/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');


//choices
const RPS_lOOKUP = {
    r: {img: 'img/rock.png', beats: 's'},
    p:  {img: 'img/paper.png', beats: 'r'},
    s:  {img: 'img/scissors.png', beats: 'p'}
}


/*----- app's state (variables) -----*/
let scores
let results
// used every round
let winner


/*----- cached element references -----*/
const pResultEl = document.getElementById('p-result')
console.log('this is p-results', pResultEl)
const cResultEl = document.getElementById('c-result')
console.log('this is c-results', cResultEl)
const countdownEl = document.getElementById('countdown')
console.log('this is countdown', countdownEl)
/*----- event listeners -----*/


/*----- functions -----*/

init()
//init

function init() {
    scores = {
        p: 0,
        c: 0,
        t: 0,
    }
    results = {
        p: 'r',
        c: 'r'
    }
    winner = 't'

    render()

}



// render scores, results, and countdown. (play audi and display countown time on the dom)

function renderResults() {
    pResultEl.src = RPS_lOOKUP[results.p].img
    cResultEl.src = RPS_lOOKUP[results.c].img
}


function renderScores() {
    //looping over scores object
    for (let key in scores) {
        const scoreEl = document.getElementById(`${key}-score`)
        scoreEl.innerText = scores[key]
    }
}


    // call render
    // render transfers/intializes all state through DOM Elements
    function render() {
        //display countdown
        //after countdown, display scores and results
        // results === the player and computer choices(and who wins)
        
        renderScores()
        renderResults()
    }
