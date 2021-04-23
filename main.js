// arguments that were passed in
const args = process.argv;

let DECREMENT_BY_SECS = args[2];

let forwardClockNumberOfSeconds = 0;

const condition = isNaN(DECREMENT_BY_SECS) ;

var reverseTime;
function intervalFunc() {
    
    forwardClockNumberOfSeconds++;

    let reverseClockSeconds = forwardClockNumberOfSeconds * DECREMENT_BY_SECS;

    console.log('================')
    console.log('reverseClockSeconds: ' + reverseClockSeconds)
    currentDateTime = new Date();

    if (forwardClockNumberOfSeconds == 1) {
        reverseTime = new Date();
        reverseTime.setSeconds(reverseTime.getSeconds() - reverseClockSeconds);
    }
    else {
        reverseTime.setSeconds(reverseTime.getSeconds() - reverseClockSeconds);
    }
    console.log('reverse time: ' + reverseTime.toString());
    console.log('current time: ' + currentDateTime.toString());

}

if (!condition) {
    setInterval(intervalFunc, 1000);
}
else {
    console.log('Invalid input, please enter an integer!');
}