const { humanCatDogYears } = require("../src");

describe('humanCatDogYears', () => {
    it('converts human age into cat and dog years', () => {
        expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64])
    });
});

