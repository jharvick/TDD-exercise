function greet(name) {
  let greeting = "Hello, ";
  let punctuation = ".";
  if (name === null) {
      name = "my friend"
    };
    
    if (Array.isArray(name) && name.some(element => element === element.toUpperCase())) {
      if (name.length >= 2) {
        let lowerNames = "";
        let upperName = "";
  
        for (let i = 0; i < name.length; i++) {
          if (isUpperCase(name[i])) {
            upperName = name[i];
            name.splice(i, 1);
          }
        }
        let lastName = name.pop();
        lowerNames = name.join(", ");
        return greeting + lowerNames + " and " + lastName + ". AND HELLO " + upperName + "!";
      };
    } else if (Array.isArray(name)) {
      if (name.length === 2 && !name.some(element => element.includes(", "))) {
          return greeting + name[0] + " and " + name[1] + punctuation;
      }
      if (name.length >= 2) {
          for (let i = 0; i < name.length; i++) {
            if (name[i].includes('\"')) {
              name[i] = name[i].slice(1, -1)
            } else if (name[i].includes(", ")) {
              let splitName = name[i].split(", ");
              name.splice(i, 1);
              name = name.concat(splitName);
            }
          }
          let lastName = name.pop();
          let allNames = name.join(", ");

          if (name.length === 1) {
            return greeting + allNames + " and " + lastName + punctuation;
          } 
          return greeting + allNames + ", and " + lastName + punctuation;
      }
    }
    
    if (name === name.toUpperCase()) {
        name = name.toUpperCase();
        greeting = "HELLO ";
        punctuation = "!";
    };

    return greeting + name + punctuation;
}


function isUpperCase(str) {
  return str === str.toUpperCase();
}

module.exports = greet;