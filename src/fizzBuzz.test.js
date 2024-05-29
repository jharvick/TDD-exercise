const fizzBuzz  = require("./fizzBuzz");

xdescribe('FizzBuzz', () => {
    describe('returning a number', () => {
        it('when passed 1, it should return 1', () => {
            expect(fizzBuzz(1)).toBe(1);
        });

        it('when passed 2, it should return 2', () => {
            expect(fizzBuzz(2)).toBe(2);
        });
    });

    describe('arguemnts divisible by 3', () => {
        it('when passed 3, it should return Fizz', () => {
            expect(fizzBuzz(3)).toBe("Fizz");
        });
        it('when passed 6, it should return Fizz', () => {
            expect(fizzBuzz(6)).toBe("Fizz");
        });
    });

    describe('arguemnts divisible by 5', () => {
        it('when passed 5, it should return Buzz', () => {
            expect(fizzBuzz(5)).toBe("Buzz");
        });
        it('when passed 10, it should return Buzz', () => {
            expect(fizzBuzz(10)).toBe("Buzz");
        });

    });

    describe('arguemnts divisible by 3 and 5', () => {
        it('when passed 15, it should return FizzBuzz', () => {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it('when passed 30, it should return FizzBuzz', () => {
            expect(fizzBuzz(30)).toBe("FizzBuzz");
        });
    });
});
