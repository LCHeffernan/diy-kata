
const reachDestination = (distance, speed) => {
let time = (distance/speed).toFixed(1);
const timeWholeHours = Math.trunc(time);
const decimal = time - timeWholeHours;
if(decimal <= 0.5){time = timeWholeHours + 0.5}
else {time = timeWholeHours + 1};
return 'I should be there in ' + time + ' hours.';
};

module.exports = reachDestination;
