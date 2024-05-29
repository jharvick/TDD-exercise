const name = require("./greeting");

describe('Greeting', () => {
    describe('When input is a string with one name, return hello name', () => {
        it('when passed "Bob", should return "Hello, Bob."', () => {
            expect(name("Bob")).toBe("Hello, Bob.");
        });
    });

    describe('returns "Hello, my friend!" when name is NULL', () => {
        it('when passed NULL, it should return Hello, my friend!', () => {
            expect(name(null)).toBe("Hello, my friend.");
        });
    });

    describe('When name is all uppercase, return the return should be all uppercase', () => {
        it('when passed JERRY, it should return HELLO JERRY!', () => {
            expect(name("JERRY")).toBe("HELLO JERRY!");
        });
    });

    describe('When input is array with two values, return greeting with both names', () => {
        it('When passed ["Jill", "Jane"], should return "Hello, Jill and Jane.', () => {
            expect(name(["Jill", "Jane"])).toBe("Hello, Jill and Jane.")
        })
    })
    
    describe('Handle an arbitrary number of names as input', () => {
        it('When passed ["Amy", "Brian", "Charlotte"], should return "Hello, Amy, Brian, and Charlotte."', () => {
            expect(name(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
        });
    });

    describe('Allow mixing of normal and shouted names by separating the response into two greetings', () => {
        it('When passed ["Amy", "BRIAN", "Charlotte"], should return "Hello, Amy and Charlotte. AND HELLO BRIAN!"', () => {
            expect(name(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
        });
    });

    describe('Handle strings with names separated by commas', () => {
        it('When passed ["Bob", "Charlie, Dianne"], should return "Hello, Bob, Charlie, and Dianne."', () => {
            expect(name(["Bob", "Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.")
        })
    });

    describe('Allow the input to escape intentional commas in names by surrounding the name in double-quotes', () => {
        it('When passed ["Bob", "\"Charlie, Dianne\""], should return "Hello, Bob and Charlie, Dianne."', () => {
            expect(name(["Bob", "\"Charlie, Dianne\""])).toBe("Hello, Bob and Charlie, Dianne.")
        });
    });
});
