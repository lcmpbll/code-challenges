/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */

export const countNumberOfElements = (arr) => {
    const length = arr.reduce((accumulator, value, idx) => {
        accumulator = accumulator + 1;
        return accumulator;
    }, 0);
    return length;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named eyeColorTally that, given the Star Wars data, uses reduce to return an 
object with a key for each eye color and whose value is the number of characters having that 
eye color:

{ blue: 1, yellow: 2, red: 1, brown: 1 }
------------------------------------------------------------------------------------------------ */

export const eyeColorTally = (arr) => {
    const eyeColors = arr.reduce((accumulator, value, idx) => {
        //accumulator[value[idx].eye_color] = accumulator[value[idx].eye_color];
        let currCount = null;
        if(accumulator[value.eye_color] !== undefined){
            currCount = accumulator[value.eye_color];
        } else {
            currCount = 0;
        }
        
        return {
            ...accumulator,
            [value.eye_color]: currCount += 1,
        }; 
        
        
    }, {});
    return eyeColors;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named eyeColorNames that, given the Star Wars data, uses reduce to return an 
object with a key for each eye color and whose value an array of character names having that 
eye color:

{ blue: 1, yellow: 2, red: 1, brown: 1 }
------------------------------------------------------------------------------------------------ */

export const eyeColorNames = (arr) => {
    const characterEyes = arr.reduce((accumulator, value, idx) => {
        let currentArray = null;
        if(accumulator[value.eye_color] !== undefined){
            currentArray = accumulator[value.eye_color];
        } else {
            currentArray = [];
        }
        
        return {
            ...accumulator,
            [value.eye_color] : currentArray.concat(value.name)
        };
    }, {}); 
    // console.log(characterEyes);
    return characterEyes;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named countNumberOfChildren that, given the array of characters, uses reduce to return the total number of children in the data set.
------------------------------------------------------------------------------------------------ */


export const countNumberOfChildren = (arr) => {
    return arr.reduce((acc, val) => {
        if(val.children !== undefined){
            acc += val.children.length;
            
        }
        return acc;  
    }, 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.

Hint: The accumulator should begin as { count: 0, sum: 0 }
------------------------------------------------------------------------------------------------ */

export const calculateAverage = (arr) => {
    const avg = arr.reduce((acc, val) => {
        acc.count += 1;
        acc.sum += val;
        acc.avg = acc.sum / acc.count;
        return acc;
    }, { count: 0, sum: 0 });
    return avg.avg;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.

You are welcome to use the provided isPrime function.
------------------------------------------------------------------------------------------------ */

const isPrime = (value) => {
    if(value === 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(value); i ++){
        if(value % i === 0){
            return false;
        }
    }
    return true;
};

export const countPrimeNumbers = (arr) => {
    const numberOfPrimes = arr.reduce((acc, val) => {
        if(isPrime(val) === true){
            acc += 1;
        }
        return acc; 
    }, 0);
    return numberOfPrimes;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named effortStats that, given the snorlaxData uses reduce to return an object with the 
minimum and maximum effort level in the format:

Hint: The accumulator should begin as { min: 0, max: 0 }

------------------------------------------------------------------------------------------------ */

export const effortStats = (arr) => {
    const minMaxEffort = arr.reduce((acc, val) => {
        if(val.effort > acc.max){
            acc.max = val.effort;
        }
        if(val.effort < acc.min || acc.min === 0){
            acc.min = val.effort;
        }
        return acc;
    }, { min: 0, max: 0 });
    return minMaxEffort;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named extractChildren that, given the array of characters from challenge 4, accomplishes the following:

1) Uses filter to return an array of the characters that contain the letter 'a' in their name

2) Then, uses reduce to return an array of all the children's names in the filtered array
------------------------------------------------------------------------------------------------ */

export const extractChildren = (arr) => {
    const charactersWithA = arr.filter(char => char.name.toLowerCase().includes('a'));
    
    const newChildrenArray = charactersWithA.reduce((acc, val) => {
        if(val.children !== undefined){
          
            val.children.forEach(name => acc.push(name));
            
        }
        return acc;
        
      
    }, []);
    return newChildrenArray;
};
