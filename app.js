document.addEventListener("DOMContentLoaded", function() {
    const timerTextElement = document.getElementById("timerText");

    // Helper to get a button and warn if missing
    function getBtn(id) {
        const el = document.getElementById(id);
        if (!el) console.warn(`Button with id "${id}" not found in DOM.`);
        return el;
    }

    const twentyBtn = getBtn("twentySecondsBtn");
    const thirtyBtn = getBtn("thirtySecondsBtn");
    const fortyBtn = getBtn("fortySecondsBtn"); // note: "forty" not "fourty"
    const oneMinBtn = getBtn("oneMinuteBtn");

    let currentTimer = null;

    function startTimer(seconds) {
        clearInterval(currentTimer);
        let count = seconds;

        // show initial value immediately
        timerTextElement.textContent = `${count} seconds left`;
        timerTextElement.classList.add("text-2xl", "font-bold");

        currentTimer = setInterval(() => {
            count--;
            if (count > 0) {
                timerTextElement.textContent = `${count} seconds left`;
            } else {
                clearInterval(currentTimer);
                timerTextElement.textContent = "Your moment is complete";
            }
        }, 1000);
    }

    // Attach handlers only if the button exists
    if (twentyBtn) twentyBtn.onclick = () => startTimer(20);
    if (thirtyBtn) thirtyBtn.onclick = () => startTimer(30);
    if (fortyBtn) fortyBtn.onclick = () => startTimer(40);
    if (oneMinBtn) oneMinBtn.onclick = () => startTimer(60);
});




// let timerTextElement = document.getElementById("timerText");

// let currentTimer = null;

// // A common reusable timer function
// function startTimer(seconds) {

//     // Stop any running timer before starting a new one
//     clearInterval(currentTimer);

//     let count = seconds;

//     currentTimer = setInterval(function () {

//         timerTextElement.textContent = count + " seconds left";
//         timerTextElement.classList.add("text-2xl", "font-bold");

//         count--;

//         if (count === 0) {
//             clearInterval(currentTimer);
//             timerTextElement.textContent = "Your moment is complete";
//         }

//     }, 1000);
// }

// // Buttons
// document.getElementById("twentySecondsBtn").onclick = function () {
//     startTimer(20);
// };

// document.getElementById("thirtySecondsBtn").onclick = function () {
//     startTimer(30);
// };

// document.getElementById("fourtySecondsBtn").onclick = function () {
//     startTimer(40);
// };

// document.getElementById("oneMinuteBtn").onclick = function () {
//     startTimer(60);
// };


////MY CODE

// let twEBElement = document.getElementById("twentySecondsBtn");
// let timerTextElement = document.getElementById("timerText");

// let uiniqueIdTs = null;
// let uiniqueIdThs = null;
// // let uiniqueIdfs = null;
// // let uiniqueIdOm = null;
// twEBElement.onclick = function() {
//     let count1 = 20;

//     clearInterval(uiniqueIdThs);
//     //  uiniqueIdfs = null;
//     // clearInterval(uiniqueIdfs);
//     //  uiniqueIdOm = null;
//     // clearInterval(uiniqueIdOm);



//     uiniqueIdTs = setInterval(function() {
//         console.log(count1 + " seconds left");
//         timerTextElement.textContent = (count1 + " seconds left");
//          timerTextElement.classList.add("text-2xl","font-bold");
//         count1 = count1 - 1;
//         if (count1 === 0) {
//             clearInterval(uiniqueIdTs);
//             timerTextElement.textContent = ("Your moment is complete");
//             console.log("Your moment is complete");
//         }
//     }, 1000);

// };

// let thirtyBtnElement = document.getElementById("thirtySecondsBtn");

// thirtyBtnElement.onclick = function() {
//     let count2 = 30;

//     clearInterval(uiniqueIdTs);

//     //  uiniqueIdfs = null;
//     //  uiniqueIdOm = null;
//     uiniqueIdThs = setInterval(function() {
//         count2 = count2 - 1;
//         timerTextElement.textContent = (count2 + " seconds left");
//         timerTextElement.classList.add("text-2xl","font-bold");
//         if (count2 === 0) {
//             timerTextElement.textContent = ("Your moment is complete");
//             clearInterval(uiniqueIdThs);
//         }

//     }, 1000);

// };

// // let fsElement = document.getElementById("fourtySecondBtn");
