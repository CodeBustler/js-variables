// ##### var : In Detail #####

// Hoising #### | Allowed
// console.log(a); // O/P : undefined | declaration is hoisted, not the initialization.

// -------------------------------------
// Global
var a = 'CodeBustler';
console.log(a); // O/P : CodeBustler

// Block Scope | X: Not Allowed
{
  var b = 'Coding';
}

console.log(a); // O/P : CodeBustler
console.log(b); // O/P : Coding | Accessing block scope value from global
// -------------------------------------

// Re-Assigning #### | Allowed
a = 'TechnestArjun';
console.log(a); // Overwrites 'a' value

// Re-Declaration #### | Allowed
var a = 'myTechKnowledge';
console.log(a); // Overwrites 'a' value
