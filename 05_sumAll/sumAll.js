const sumAll = function() {

    const args = Array.from(arguments);
    let firstNum = args.shift();
    let secondNum = args.shift();
    let total = 0;

    //return error if the input types aren't number
    //return error if either numbers are less than zero
    if (typeof firstNum !== "number") {
        return 'ERROR';
    } else if (typeof secondNum !== "number") {
        return 'ERROR';
    } else if (firstNum < 0) {
        return 'ERROR';
    } else if (secondNum < 0) {
        return 'ERROR';
    }

    //ensure firstNum is always the smallest number
    if (firstNum > secondNum) {
        let tempNum = firstNum;
        firstNum = secondNum;
        secondNum = tempNum;
    }

    //create an array where we will store the entire range of numbers
    const nums = [];

    //push firstNum into the array and increment firstNum
    //pushing firstNum each time until we reach the value of secondNum
    while (firstNum <= secondNum) {
        nums.push(firstNum);
        firstNum++;
    }

    //add each number in the array together
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    return total;

};

// Do not edit below this line
module.exports = sumAll;
