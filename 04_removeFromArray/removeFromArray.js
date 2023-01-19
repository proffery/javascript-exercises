const removeFromArray = function(array, arg) {
    for (let j = 0; j < arguments.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === arguments[j]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
