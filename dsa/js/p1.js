// problem 
/**
 * create an array with 5 students names, after that create a function which takes 
 * 2 parameter (allStudents and studentName) iterate 
 * over all students and find that specific user "studentName" 
 */

const studentNames = ['ali', 'alia', 'lamin', 'lamia', 'mia']

const findSepecificUserName =  (allStudents, studentName)=> {
    //
    const specificName = allStudents.find((student) => student.toLowerCase() === studentName.toLowerCase())
    return specificName || 'Student not found';
}

const result = findSepecificUserName(studentNames, 'Lamia');
console.log(result);






