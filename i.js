// Number gessing game

const minnNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum - minnNum + 1)) ;

let attempts = 0;
let guess;
let running = true;

while (running == true) {
    
    guess = window.prompt(`Guess a number betwenn ${minnNum} - ${ maxNum}`)
    guess= Number (guess)
    
    if (isNaN( guess)) {
        window.alert ("Please enter a valid number")
    }

     else if (guess> maxNum || guess < minnNum) {
        window.alert ("Please enter a valid number")
    }

    else{
        attempts++;
        if (guess < answer) {
                    window.alert ("TOO LOW! TRY AGAIN")

        }
        else if (guess > answer) {
                    window.alert ("TOO HIGH! TRY AGAIN")
        }
        else{
            window.alert(`CORRECT! The answer was ${answer} . It took you ${attempts} attempts`)
                running=false;
        }
    }
}