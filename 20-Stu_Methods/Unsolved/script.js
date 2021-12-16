var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

// As a developer, I want to use array methods to add and remove elements from an array and join two arrays.

// As a developer, I want to use a string method to return a new string that contains only capital letters.

// Acceptance Criteria

// It's done when the string "Canis Major" is added as the first element of the constellations array and no elements are removed.
const newConstellation = "Canis Major";
constellations.unshift(newConstellation);

console.log(constellations);

// It's done when "Venus" is removed from the planets array.
planets.pop();
console.log(planets);

// It's done when the arrays constellations and planets are joined to form a new array named galaxy. The arrays constellations and planets should not be altered.
let galaxy = constellations.concat(planets);
console.log(galaxy);

// It's done when the string "polaris" is converted into all capital letters and the new string is stored in a variable.
star = star.toUpperCase();
console.log(star);
