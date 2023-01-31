const palindromes = function (word) {
    let reverseWord;
    let cleanWord = word.replaceAll(" ","").replaceAll("!","").replaceAll(",","").replaceAll(".","").toLowerCase();
    let cleanWordToArr = cleanWord.split('');
    let reverseArr = new Array (cleanWordToArr.length);
    for (i = cleanWordToArr.length; i > 0; i--) {
        reverseArr[cleanWordToArr.length - i] = cleanWordToArr[i -1];
    }
    reverseWord = reverseArr.join('');
    
    if (reverseWord === cleanWord) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
