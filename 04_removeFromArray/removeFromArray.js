const removeFromArray = function() {

    const args = Array.from(arguments);
    const array = args.shift();

    while (args.length > 0) {
        
        let item = args.shift();
        
        if (array.includes(item)) {
            const index = array.indexOf(item);
            array.splice(index, 1);
        }
    }

    if (args.length === 0) {
        return array;
    }
}

// Do not edit below this line
module.exports = removeFromArray;