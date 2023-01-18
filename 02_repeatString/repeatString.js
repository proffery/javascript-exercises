const repeatString = function(string, value) {
if (value > 0) {
    let resultString = string;
    for (i = 0; i < value - 1; i++) {
        resultString += string;
    }
    return resultString; 
}

else if (value == 0) {
    return '';
}
return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
