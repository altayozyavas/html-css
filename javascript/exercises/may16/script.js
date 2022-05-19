function largestBinaryGap(num) {
let gaps = [];
const nums = num.toString(2).split("");
for (let i = 0; i < nums.length; i++) {
    let gap = 0;
    if (nums[i] == 1) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] == 0) {
                gap++;
            } else {
                gaps.push(gap);
                break;
            }
        }
    }    
}
return Math.max(...gaps);
}

console.log(largestBinaryGap(529));

console.log("----------------------");


function removeDups(arr) {
    let result = [];
    let arrSet = new Set(arr);
    arrSet.forEach(num => {
        result.push(num);
    });
    return result;
}

function removeDups2(arr) {
    return [...new Set(arr)];
}

function removeDups3(arr) {
    let result = [];
    arr.forEach(num => {
        if (!result.includes(num)) {
            result.push(num);
        }
    });
    return result;
}

function removeDups4(arr) {
    arr.forEach(num => {
        if (arr.includes(num)) {
            arr.shift();
        }
    });
    return arr;
}

console.log(removeDups([4,5,4,4,7,5]));
console.log(removeDups2([4,5,4,4,7,5]));
console.log(removeDups3([4,5,4,4,7,5]));
console.log(removeDups4([4,5,4,4,7,5]));


console.log("----------------------");


function arrayAndFunction(arr, functionX) {
    let result = [];
    arr.forEach(num => {
        if (functionX(num)) {
            result.push(num);
        }
    });
    return result;
}

console.log(arrayAndFunction([1,2,3], function(num){return num === 2}));
console.log(arrayAndFunction([1,2,3,4,5,6], function(num){return num % 2 === 0}));
console.log(arrayAndFunction([1,2,3,4,5,6], function(num){return num > 3}));


console.log("----------------------");


function isPangram(str) {
    let noOfLetters = 0;
    let newStrArr = new Set(str.toLowerCase().split(""));
    for (const letter of newStrArr) {
        if (letter.match(/[a-z]/i)) noOfLetters++;
    }
    return noOfLetters === 26;
}

console.log(isPangram("Watch Jeopardy, Alex Trebek's fun TV quiz game"));
