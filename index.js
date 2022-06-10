// Code your solution here
function findMatching(driver1,driver2){
    return driver1.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === driver2.toLowerCase()

    );

}
function fuzzyMatch(driver1,driver3){
    return driver1.filter(
    (possibleMatch) =>possibleMatch.toLowerCase().indexOf (driver3.toLowerCase()) ===0 
    );
}
function matchName(driver1,driver2){
return driver1.filter((record) => record.name === driver2);
}