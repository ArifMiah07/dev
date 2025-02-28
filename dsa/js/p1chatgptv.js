// Problem: Find a specific student by name from a list of students.

const studentNames = ['ali', 'alia', 'lamin', 'lamia', 'mia'];

/**
 * Finds a specific student by name from a list of students.
 * Supports case-insensitive matching, input validation, and error handling.
 * Can return the student index if desired.
 * 
 * @param {Array} allStudents - The list of student names (Array of strings).
 * @param {string} studentName - The name of the student to search for (string).
 * @param {boolean} returnIndex - Optional flag to return the index of the student (default: false).
 * 
 * @returns {string|number} - Returns the student name, 'Student not found', 'Invalid input', or the index of the student.
 */
const findSpecificStudentName = (allStudents, studentName, returnIndex = false) => {
  // Input validation for allStudents
  if (!Array.isArray(allStudents)) {
    return 'The student list must be an array.';
  }
  if (allStudents.length === 0) {
    return 'The student list is empty.';
  }

  // Input validation for studentName
  if (typeof studentName !== 'string' || studentName.trim() === '') {
    return 'Please provide a valid student name (non-empty string).';
  }

  // Find student, case-insensitive
  const normalizedStudentName = studentName.trim().toLowerCase();
  
  // Perform search with optional return of index
  const index = allStudents.findIndex(student => student.toLowerCase() === normalizedStudentName);

  // If we want to return the student index, return it
  if (returnIndex) {
    return index !== -1 ? index : 'Student not found';
  }

  // Return the student name or not found message
  return index !== -1 ? allStudents[index] : 'Student not found';
};

// Test cases for various scenarios

console.log(findSpecificStudentName(studentNames, 'Lamia'));        // 'lamia'
console.log(findSpecificStudentName(studentNames, 'lamin'));        // 'lamin'
console.log(findSpecificStudentName(studentNames, 'MIA'));          // 'mia'
console.log(findSpecificStudentName(studentNames, 'alex'));        // 'Student not found'
console.log(findSpecificStudentName([], 'Lamia'));                 // 'The student list is empty.'
console.log(findSpecificStudentName(studentNames, ''));            // 'Please provide a valid student name (non-empty string).'
console.log(findSpecificStudentName(null, 'Lamia'));               // 'The student list must be an array.'
console.log(findSpecificStudentName(studentNames, 12345));         // 'Please provide a valid student name (non-empty string).'
console.log(findSpecificStudentName(studentNames, 'lamia', true)); // 3 (Index of 'lamia')

// Edge case: Multiple names with the same characters, ignoring case
const duplicateNames = ['john', 'John', 'jOhn'];
console.log(findSpecificStudentName(duplicateNames, 'JOHN')); // 'john'

// Example of checking for index
console.log(findSpecificStudentName(studentNames, 'Lamia', true)); // 3
