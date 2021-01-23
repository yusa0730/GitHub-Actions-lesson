const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
    it("returns FizzBuzz when value is divisible by 15", () => {
        expect(fizzbuzz(30)).toStrictEqual("FizzBuzz");
    });

    it("returns Fizz when value is divisibled by 3", () => {
        expect(fizzbuzz(3)).toStrictEqual("Fizz");
    });

    it("returns Buzz when value is divisibel by 5", () => {
        expect(fizzbuzz(5)).toStrictEqual("Buzz");
    });

    it("returns the value when value is not divisible by 3 or 5", () => {
       expect(fizzbuzz(7)).toStrictEqual("7"); 
    });
});
