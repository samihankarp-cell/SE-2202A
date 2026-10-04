// Task 1: Callback functions

// Predicates accept null, undefined, any Number (including NaN), or a numeric String (e.g., "1", "1.1").
// null is excluded explicitly because Number(null) is 0, which would count as even.
let even_predicate = function (value)
{
    return value !== null && Number.isInteger(Number(value)) && Number(value) % 2 === 0;
};

let odd_predicate = function (value)
{
    // Not "% 2 === 1": that would miss negative odd integers, where % gives -1.
    return value !== null && Number.isInteger(Number(value)) && Number(value) % 2 !== 0;
};

let undefined_predicate = function (value)
{
    return value === undefined;
};

let null_predicate = function (value)
{
    return value === null;
};

// predicate: any function taking one value and returning true or false
let check = function (predicate, value)
{
    return predicate(value);
};


// Task 2: Functions as return values

// lang: "E" or "English" for English, "F" or "French" for French, in any capitalization
let getDictionary = function (lang)
{
    // number: a Number
    let englishDictionary = function (number)
    {
        switch (number)
        {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            default:
                return "not included in dictionary";
        }
    };

    // number: a Number
    let frenchDictionary = function (number)
    {
        switch (number)
        {
            case 1:
                return "un";
            case 2:
                return "deux";
            case 3:
                return "trois";
            default:
                return "not included in dictionary";
        }
    };

    switch (lang.toLowerCase())
    {
        case "e":
        case "english":
            return englishDictionary;
        case "f":
        case "french":
            return frenchDictionary;
    }
};

// Tests for the returned dictionary functions
let english = getDictionary("English");
console.log(english(2));   // two
console.log(english(7));   // not included in dictionary

let french = getDictionary("f");
console.log(french(3));    // trois
console.log(french(0));    // not included in dictionary
