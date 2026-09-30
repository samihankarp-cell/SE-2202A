// Task 1: Datatypes and Comparisons

// birthYear: positive integer Number (<= 2026) or a String of digits, e.g. "1991"
function printAgeIn2026(birthYear){
    let age = 2026 - birthYear;

    console.log("This person will turn " + age + " in 2026.")
    return age;
}

// age: positive integer Number or a String of digits, e.g. "25"
function printAgeIn10Years(age){
    let newAge = +age + 10;

    console.log("This person will be " + newAge + " in 10 years.")
    return newAge;
}

// age: Number or String of digits representing an integer
function checkIfAdult(age){
    let isAdult = age >= 18;

    console.log("The person is " + (isAdult ? "" : "not")  + " adult.")
    return isAdult;
}

function checkIfZero(number){
    let isZero = number === 0;

    console.log("The input is " + (isZero ? "" : "not")  + " 0.")
    return isZero;
}

// string: non-empty String; number: Number (not NaN)
function checkIfEquivalent(string, number){
    let isEquivalent = string == number;

    console.log("The string is " + (isEquivalent ? "" : "not")  + " equivalent to the number.")
    return isEquivalent;
}

// Task 2: Shortcircuits

// unreadCount: positive integer Number, null, or undefined
function unreadAlert(unreadCount){
    unreadCount && console.log("You have " + unreadCount + " messages.")
}

function unreadAlertValidated(unreadCount){
    typeof unreadCount === "number" && unreadCount > 0 && console.log("You have " + unreadCount + " messages.")
}

// unreadCount: String, Number, null, or undefined
function unreadAlertStringInput(unreadCount){
    unreadCount && Number(unreadCount) > 0 && console.log("You have " + unreadCount + " messages.")
}

// score: Number, null, or undefined
function showScore(score){
    let correctedScore = score ?? "N/A";

    console.log("The score is:" + score)
    return correctedScore;
}

// username: String (possibly empty) or undefined
function printWelcomeMessage(username){
    let userOrPlaceholder = username || "Mustang";

    console.log("Welcome, " + userOrPlaceholder + "!")
    return userOrPlaceholder;
}
