/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named sortBackwards that takes in an array of numbers and returns the same array, with the numbers sorted, highest to smallest.
------------------------------------------------------------------------------------------------ */

export const sortBackwards = (arr) => {
    const compareFunction = (a, b) => {
        return a - b;
    }; 
    arr.sort(compareFunction);
    
    return arr.reverse();
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named alphabetize that takes in an array of strings and returns the same array with the strings sorted alphabetically.

In this alphabetization, capital letters come before lower case letters.

For example, ['Alphabet', 'Zebra', 'alphabet', 'carrot'] is correctly sorted.
------------------------------------------------------------------------------------------------ */

export const alphabetize = (arr) => {
    arr.sort();
    return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named sortByLength that takes in an array of strings and returns the same array, with the strings sorted by their length, lowest to highest.
------------------------------------------------------------------------------------------------ */
//don't know why this works with " - " and not " < "
export const sortByLength = (arr) => {
    arr.sort((a, b) => {
        return a.length - b.length;
    });
  
    
    return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named alphabetizeBetter that takes in an array of strings and returns the same array, with the strings sorted alphabetically. Capitalization should not change the sort order of two strings.

For example, ['Alphabet', 'alphabet', 'carrot', 'Zebra'] is correctly sorted, and so is ['alphabet', 'Alphabet', 'carrot', 'Zebra'].
------------------------------------------------------------------------------------------------ */

export const alphabetizeBetter = (arr) => {
    
    arr.sort((a, b) => {
        if(a.toLowerCase() < b.toLowerCase()) return -1;
        if(a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;
        
    });
   
    return arr;
    
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named sortByPrice that takes in an array of objects, each of which has a 'price' property, and sorts those objects by price, lowest to highest, returning the same array.

Here is an example of the input:
[
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];
------------------------------------------------------------------------------------------------ */

export const sortByPrice = (arr) => {
    arr.sort((a, b) => { 
        if(a.price < b.price) return -1;
        if(a.price > b.price) return 1;
        return 0; 
    });
    return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named sortNumbersByLength that takes in an array of numbers and sorts those numbers by their length.

For example, [1, 14, 0.2, -281, 54782] is only correctly sorted in that order.
------------------------------------------------------------------------------------------------ */

export const sortNumbersByLength = (arr) => {
    arr.sort((a, b) => {
        if(a.toString().length < b.toString().length) return -1;
        if(a.toString().length > b.toString().length) return 1;
        return 0;
    });
    return arr;
};

/*-----------------------------------------------------------------------------------------------
CHALLENGE 7

Write a function named sortPeople that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names. Do not worry about capitalization or first names.
------------------------------------------------------------------------------------------------ */

export class Person {
    constructor(firstName, lastName, age){
        firstName = this.firstName,
        lastName = this.lastName,
        age = this.age;
    }
  
}

export const sortPeople = (arr) => {
    arr.sort((a, b) => {
        if(a.lastName < b.lastName) return -1;
        if(a.lastName > b.lastName) return 1;
        return 0;
    });
    return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8

Write a function named sortPeopleBetter that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names.

If two people share the same last name, alphabetize on their first name.

If two people have the same full name, the younger one should come first. Do not worry about capitalization.
------------------------------------------------------------------------------------------------ */

export const sortPeopleBetter = (arr) => {
    arr.sort((a, b) => {
        if(a.lastName < b.lastName) return -1;
        if(a.lastName > b.lastName) return 1;
        else if(a.lastName === b.lastName){
            if(a.firstName < b.firstName) return -1;
            if(a.firstName > b.firstName) return 1;
            else if(a.age < b.age) return -1;
            else if(a.age > b.age) return 1;
            return 0;
        }
    });
    return arr;
};
