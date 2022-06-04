const humanCatDogYears = number => {
    const catMultiplier = 4;
    const dogMultiplier = 5;
    const formula = ((animal, number) => {return 15 + 9 + animal * (number - 2)});    
    const array = [number, formula(catMultiplier, number), formula(dogMultiplier, number)];
    return array
};

module.exports = humanCatDogYears;
