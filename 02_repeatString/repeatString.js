const repeatString = function(string, num) {

    let originalString = '';

    if (num < 0) {
        originalString = 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            originalString += string;
        }
    }

    return string = originalString;
};

// Do not edit below this line
module.exports = repeatString;
