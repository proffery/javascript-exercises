const fibonacci = function(number) {
    if (number >= 2)  {
        let array = new Array(parseInt(number) + 1);
        array[0] = 0;
        array[1] = 1;
        for (i = 2; i < array.length; i++) {
            array[i] = array[i - 2] + array[i - 1];
        }
        return array[array.length - 1];
    }
    else if (number == 1) {
        return 1;
    }
    else {
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
