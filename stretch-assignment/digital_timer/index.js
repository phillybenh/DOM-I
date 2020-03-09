/////////////////////////////
//The resource from “http://127.0.0.1:5500/DOM-I/stretch-assignment/digital_timer/DOM-I/stretch-assignment/digital_timer/index.js” was blocked due to MIME type (“text/html”) mismatch (X-Content-Type-Options: nosniff).
//////////////////////////////




/*
  window.setTimeout(function, milliseconds); //Executes a function, after waiting a specified number of milliseconds.

*** window.setInterval(function, milliseconds); //The setInterval() method repeats a given function at every given time-interval.

 *** window.clearTimeout(timeoutVariable); //The clearTimeout() method stops the execution of the function specified in setTimeout().

*/

//Selectors
const msTens = document.querySelector('#msTens');
const msHundreds = document.querySelector('#msHundreds');
const secOnes = document.querySelector('#secondOnes');
const secTens = document.querySelector('#secondTens');

// Let's make a timer?
const seconds = 0;

function timer() {
    for (let i = 0; i <= 10000; i++)
        if (i < 100) {
            let msT = i / 10;
            msTens.textContent = msT;
            return msTens;
        }
        else if (i < 1000) {
            //msH
        }
        else if (i < 10000) {
            //secO
        }
        else {
            document.querySelector(digits).forEach(item => {
                item.style.color = 'red';
            })
        }
}

window.setInterval(timer, 10) //calls timer and repeats every 10 ms