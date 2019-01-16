Array.prototype.setTimeOutEven = function () {
    var data = this;
    setTimeout(function () {
        var evenValues = [];
        let index = 0;
        data.forEach(value => {

            if (value % 2 === 0) {
                evenValues[index] = value;
                index++;
            }
        });
        console.log(evenValues);
    }, 0);
};


Array.prototype.setTimeOutOdd = function () {
    var data = this;
    setTimeout(function () {
        var evenValues = [];
        let index = 0;
        data.forEach(value => {

            if (value % 2 !== 0) {
                evenValues[index] = value;
                index++;
            }
        });
        console.log(evenValues);
    }, 0);

};


console.log(`start`);
[1, 2, 3, 4, 5, 6, 7, 8].setTimeOutEven();
[1, 2, 3, 4, 5, 6, 7, 8].setTimeOutOdd();
console.log(`end`);