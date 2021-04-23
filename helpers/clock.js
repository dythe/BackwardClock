let forwardClockNumberOfSeconds = 0;
let reverseTime;

function executeBackwardClock(seconds_to_decrease, typeofexecution) {
    
    forwardClockNumberOfSeconds++;

    let reverseClockSeconds = forwardClockNumberOfSeconds * seconds_to_decrease;

    currentDateTime = new Date();

    if (forwardClockNumberOfSeconds == 1) {
        reverseTime = new Date();
        reverseTime.setSeconds(reverseTime.getSeconds() - reverseClockSeconds);
    }
    else {
        reverseTime.setSeconds(reverseTime.getSeconds() - reverseClockSeconds);
    }
    let reverseTimeString = reverseTime.toString();
    let currentTimeString = currentDateTime.toString();
    console.log(`Reverse Time: ${reverseTimeString}, Current Time: ${currentTimeString}`);

}

function setClockInterval(seconds_to_decrease, typeofexecution) {
    
    const condition = isNaN(seconds_to_decrease);

    if (!condition) {
        (typeofexecution == 'normal') ? setInterval(function() { executeBackwardClock(seconds_to_decrease, typeofexecution); }, 1000): executeBackwardClock(seconds_to_decrease, typeofexecution);
    }
    else {
        console.log('Invalid input, please enter an integer!');
    }
}

module.exports = { setClockInterval, executeBackwardClock }