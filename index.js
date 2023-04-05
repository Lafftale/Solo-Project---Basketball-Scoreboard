let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homeCount = 0
let guestCount = 0

function add1Home(){
    homeCount += 1
    homeEl.textContent = homeCount
}

function add2Home(){
    homeCount += 2
    homeEl.textContent = homeCount
}

function add3Home(){
    homeCount += 3
    homeEl.textContent = homeCount
}

function add1Guest(){
    guestCount += 1
    guestEl.textContent = guestCount
}

function add2Guest(){
    guestCount += 2
    guestEl.textContent = guestCount
}

function add3Guest(){
    guestCount += 3
    guestEl.textContent = guestCount
}

function newGame(){
    guestCount = 0
    homeCount = 0
    guestEl.textContent = guestCount
    homeEl.textContent = homeCount
}