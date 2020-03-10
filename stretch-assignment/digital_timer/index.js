
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
const time = 0; //in 10ms increments

function timer() {
    // for (let i = 0; i <= 10000; i++) this doesn't make sense with setInterval
        if (time < 10) {
            
            msTens.textContent = time.toString();
            return msTens;
        }
        else if (time < 100) {
            //msH
        }
        else if (time < 1000) {
            //secO
        }
        else {
            document.querySelector(digits).forEach(item => {
                item.style.color = 'red';
            })
         }
}

window.setInterval(timer, 10) //calls timer and repeats every 10 ms