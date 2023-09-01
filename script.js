// JS Variables | let, const & var

// ##### let : In Detail #####

// Hoising #### | No Hosting
console.log(a); // Throws an error: Cannot access 'a' before initialization

// ---------------------------------------
// Global
let a = 'codebustler';

// Block
{
  console.log(a + ' | Block'); // codebustler | accessing global value in block
  let b = 'Coding';
}
// ---------------------------------------

// Re-Assigning #### | Allowed
a = 'codenest360';
console.log(a + ' | Global'); // codenest360 | accessing Re-Assigned global value in global

// Re-Declaration #### |
// let a = 'technoArjun'; // Cannot be Re-Declared | a is already been declared
