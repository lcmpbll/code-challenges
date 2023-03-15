/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.

For example: (['name', 'duration', 'topics', 'finalExam']).
------------------------------------------------------------------------------------------------ */

export const getCourseKeys = obj => {
    let propertiesArray = [];
    for(let properties in obj){
        propertiesArray.push(properties);
    }
    return propertiesArray;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Use the characters data below for the remainder of the challenges.

Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

export const getHouseNames = houses => {
    let houseArray = [];
    for(let house in houses){
        houseArray.push(house);
    }
    return houseArray;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named getHouseWords that uses Object.values to return a new array containing the words (mottos) of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

export const getHouseWords = houses => {
    let houseWordsArray = [];
    Object.values(houses).forEach(property => {
        houseWordsArray.push(property.words);
    });
    return houseWordsArray;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named getHousesWithSize that uses Object.entries to return a new array containing objects that each have the name of a house and the number of characters in the data set.
------------------------------------------------------------------------------------------------ */

export const getHouseSizes = houses => {
    let houseSizeArray = [];
    Object.entries(houses).forEach(property => {
        let house = { 'house': null, members: 0 };
        house.house = property[0];
        house.members = property[1].characters.length;
        houseSizeArray.push(house);
    });
    return houseSizeArray;
    
};

/*------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named getHouseHead that uses a dynamic object 
property (obj[property]) to get the head of the specified house.

This function should take in the house data and a house name and return a the name of the house head.

------------------------------------------------------------------------------------------------ */

export const getHouseHead = (houses, houseToFind) => {
    let leader = '';
    Object.entries(houses).forEach(property => {
        if(property[0] === houseToFind){
            leader = property[1]['head'];
        }
    });
    return leader;

};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named totalCharacters that takes in the house data and returns a count of all characters in all houses.
------------------------------------------------------------------------------------------------ */

export const totalCharacters = houses => {
    // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named getHouseWordsMapped that does the same things as getHouseWords, but uses .map after Object.values to return the array of all house words
------------------------------------------------------------------------------------------------ */

export const getHouseWordsMapped = houses => {
    // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named totalCharactersReduced that that does the same things as totalCharacters, but uses .reduce after Object.values to return the total character count
------------------------------------------------------------------------------------------------ */

export const totalCharactersReduced = houses => {
    // Solution code here...
};
