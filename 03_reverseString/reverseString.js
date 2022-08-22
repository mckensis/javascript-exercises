const reverseString = function(string) {

    let newString = '';

    for (let i = 0; i <= string.length -1; i++) {
        newString += string[string.length -i -1];
    }

    return string = newString;

};

// Do not edit below this line
module.exports = reverseString;
