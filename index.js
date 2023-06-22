// Code your solution here
function findMatching(drivers, string){
    const searchLowerCase = string.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().includes(searchLowerCase));
}
function fuzzyMatch(drivers, string){
    const searchLowerCase = string.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(searchLowerCase));
}
function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name);
}
