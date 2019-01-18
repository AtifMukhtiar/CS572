const Gym = require('./CustomEventEmitter');
var emtr = new Gym();

emtr.on("boom", function () {
    console.log(`Athlete is working`);
});

setInterval(function () {
    emtr.emit("boom");
}, 1000);
