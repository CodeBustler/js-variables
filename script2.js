// ##### const : In Detail #####

// Hoising #### | X: No Hosting
// console.log(a); // Throws an error: Cannot access 'a' before initialization

// ---------------------------
// Global
const a = 'codebustler';

// Block
{
  console.log(a + ' | Block'); // codebustler | accessing global value in block
  const b = 'Coding';
  console.log(b); // Block Scope
}
// ---------------------------

// Re-Assigning #### | X: Not Allowed
// a = 'codenest360';
// console.log(a + ' | Global'); // Error : Assignment to constant variable.

// Re-Declaration #### | X: Not Allowed
// const a = 'technoArjun'; // Error : a is already been declared
