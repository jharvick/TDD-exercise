const fizzBuzzCounter = require("./fizzBuzzCounter");

xdescribe('FizzBuzz Counter', () => {
    it('when passed 1, it should return an array of 1 FizzBuzzed number', () => {
        expect(fizzBuzzCounter(1)).toStrictEqual([1]);
    });

    it('when passed 2, it should return an array of 1 FizzBuzzed number', () => {
        expect(fizzBuzzCounter(2)).toStrictEqual([1, 2]);
    });
    
    it('when passed 3, it should return an array of 1 FizzBuzzed number', () => {
        expect(fizzBuzzCounter(3)).toStrictEqual([1, 2, "Fizz"]);
    });

    it('when passed 5, it should return an array of 1 FizzBuzzed number', () => {
        expect(fizzBuzzCounter(5)).toStrictEqual([1, 2, "Fizz", 4, "Buzz"]);
    });

    it('when passed 15, it should return an array of 1 FizzBuzzed number', () => {
        expect(fizzBuzzCounter(15))
            .toStrictEqual([
                1, 
                2, 
                "Fizz", 
                4, 
                "Buzz", 
                "Fizz", 
                7, 
                8, 
                "Fizz", 
                "Buzz", 
                11, 
                "Fizz", 
                13, 
                14, 
                "FizzBuzz"
        ]);
    });

});

