const sumAll = function(arg1, arg2) {
    const array = [];
    let tempArg1 = arg1;
    let tempArg2 = arg2;
    let summ = 0;
    array[0] = arg1;
    if (arg1 < 0 || arg2 < 0) {
        return 'ERROR';
    }
    
    if (typeof arg1 != 'number' || typeof arg2 != 'number') {
        return 'ERROR';
    }

    if (arg1 > arg2) {
        tempArg1 = arg2;
        tempArg2 = arg1;
        array[0] = arg2;
    }
    
    for (let i = 1; i <= tempArg2 - tempArg1; i++) {
        array[i] = array[0] + i;
    }
    for (let i = 0; i < array.length; i++) {
        summ += array[i];
    }
    return summ;
};

// Do not edit below this line
module.exports = sumAll;
