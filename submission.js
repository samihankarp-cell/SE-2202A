// Student number: 251503526
// Tutorial 5

// Task 1: Var and Scope

function summarizeGrades(assignments) {
  // Running total of all (penalty adjusted) grades, reassigned every iteration
  let sum = 0;
  // Number of assignments, never reassigned
  const count = assignments.length;

  //The late penalty is 20 percentage points per day,
  //not a percentage of the grade. 
  const LATE_PENALTY_PER_DAY = 20;

  // Declared before the loop so the final assignment is still
  // accessible after the loop ends (let is block scoped, var was not)
  let assignment;

  for (let i = 0; i < count; i++) {
    assignment = assignments[i];
    // grade is reassigned below when the assignment is late, so it uses let
    let grade = assignment.grade;

    if (assignment.daysLate > 0) {
      // Only used inside this if block and never reassigned
      const latePenalty = assignment.daysLate * LATE_PENALTY_PER_DAY;
      //The minimum grade allowed is 0.
      grade = grade - latePenalty >= 0 ? grade - latePenalty: 0;
    }
    sum += grade;
  }
  
  // The last assignment processed by the loop
  const lastGraded = assignment;
  return { average: sum/count, lastGraded: lastGraded.id };
}

// Example test
const assignments = [
  { id: "1234", grade: 80, daysLate: 2 },
  { id: "5678", grade: 50, daysLate: 0},
  { id: "9876", grade: 30, daysLate: 2},
];
console.log(summarizeGrades(assignments)); 


// Task 2: Closures

let letterCounter = function (letter, ignoreCapitalization) {
    // The target letter is normalized once here and kept in the closure
    const targetLetter = ignoreCapitalization ? letter.toLowerCase() : letter;

    // don't forget to return a function
    return function (word) {
        // Lowercase the word only when capitalization should be ignored
        const wordToCheck = ignoreCapitalization ? word.toLowerCase() : word;
        let occurrences = 0;
        for (let i = 0; i < wordToCheck.length; i++) {
            if (wordToCheck[i] === targetLetter) {
                occurrences++;
            }
        }
        return occurrences;
    };
}

/**
Closures are one way of protecting data associated with objects.
(We will see another way later.) If a variable should only be accessible
by the object's methods, this can be accomplished by declaring the variable
such that it's in the closure for the method.

makeCharacter will take a character name, an return an object
that includes the names as well as functions that modify two skill.
The skills themselves will *not* be properties, or they would be able
to be modified without using a method!

The character returned from makeCharacter should have both skill levels
start at 0.

The object that makeCharacter should return is included. Fill in 
property values as necessary, but don't change the property names.
**/
function makeCharacter(characterName){
    /**
        two variables farmingSkill and fishingSkill should be accessible
        to levelUp and showSkill through a closure. Declare them in a way
        that this will be achieved.
    **/
    // Declared inside makeCharacter (not returned) so only levelUp and showSkill can reach them
    let farmingSkill = 0;
    let fishingSkill = 0;
    // Highest level any skill can reach
    const MAX_SKILL_LEVEL = 10;

    /** 
      If the skill is "farming", levelUp should increase farmingSkill by 1,
      up to a maximum of 10. If farming skill is already 10, do nothing.

      If the skill is "fishing", levelUp should increase fishingSkill by 1,
      up to a maximum of 10. If fishing skill is already 10, do nothing.

      Ignore any other input. Skill names should be lowercase and
      match exactly (i.e., "Farming" or "Fishing" should also be ignored).

      levelUp should not have a return statement.
    **/
    let levelUp = function (skill){
        if (skill === "farming" && farmingSkill < MAX_SKILL_LEVEL) {
            farmingSkill++;
        } else if (skill === "fishing" && fishingSkill < MAX_SKILL_LEVEL) {
            fishingSkill++;
        }
    }

    /** 
      If the skill is "farming", showSkill should return farmingSkill.

      If the skill is "fishing", showSkill should return fishingSkill.

      Otherwise, do not return anything.
    **/
    let showSkill = function (skill){
        if (skill === "farming") {
            return farmingSkill;
        } else if (skill === "fishing") {
            return fishingSkill;
        }
    }

    return {
        // The property must stay "name", so it is set from the characterName parameter
        name: characterName,
        levelUp,
        showSkill
    }
}
