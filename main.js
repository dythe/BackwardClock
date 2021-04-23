const clock = require('./helpers/clock')

// arguments that were passed in
const args = process.argv;

let DECREMENT_BY_SECS = args[2];

clock.setClockInterval(DECREMENT_BY_SECS, 'normal');