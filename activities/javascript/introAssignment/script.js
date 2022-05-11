// ## The Fortune Teller
const numberOfChildren = 2;
const partnerName = "John Doe";
const place = "New York";
const job = "Doctor";
console.log(`You will be a ${job} in ${place}, and married to ${partnerName} with ${numberOfChildren} kids.`);

// ## The Age Calculator
const birthYear = 1995;
const futureYear = 2041;
console.log(`I will be either ${futureYear - birthYear - 1} or ${futureYear - birthYear} in ${futureYear}`);

// ## The Lifetime Supply Calculator
const age = 27;
const maxAge = 111;
const dailyAmount = 1;
console.log(`You will need ${(maxAge - age) * 365} bags of chips to last you until the ripe old age of ${maxAge}`);

// ## The Geometrizer
const pi = 3.14159265359;
const radius = 7;
const circumference = 2 * pi * radius;
console.log(`The circumference is ${circumference}`);
const area = pi * radius * radius;
console.log(`The area is ${area}`);

// ## The Temperature Converter
const celcius = 25;
console.log(`${celcius}°C is ${celcius * 9/5 + 32}°F`);
const fahrenheit  = 25;
console.log(`${fahrenheit}°F is ${(fahrenheit - 32) * 5/9}°C`);
