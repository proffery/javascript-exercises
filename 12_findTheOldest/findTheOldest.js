const findTheOldest = function(person) {
    let oldestPersonIndex = 0;
    let oldestPersonAge = 0;
    const yearNow = new Date().getFullYear();
    for (let i = 0; i < person.length; i++) {
        if (person[i].yearOfDeath === undefined && yearNow - person[i].yearOfBirth > oldestPersonAge) {
            oldestPersonAge = yearNow - person[i].yearOfBirth;
            oldestPersonIndex = i;
        }
        else if (person[i].yearOfDeath - person[i].yearOfBirth > oldestPersonAge) {
            oldestPersonAge = person[i].yearOfDeath - person[i].yearOfBirth;
            oldestPersonIndex = i;
        }
    }
    return person[oldestPersonIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
