/*
13. Write Javascript code to update array of student objects
Create an array of student objects like given below and complete the following functions to
change the array of objects
*/
var students = [
  { id: 1, name: "Ram", total: 72, gender: "Male" },
  { id: 2, name: "Sheela", total: 75, gender: "Female" },
];
// Implement the following functions:
// 1.findStudentById(id) - returns student object for the given id if found else null

function findStudentById(id){
    for(let student of students){
        if(student.id === id){
            return student;
        }
    }
    return null;
}
console.log(findStudentById(1))

// 2. findStudentsByGender(gender) - returns array of students for the given gender
function findStudentsByGender(gender){
    let bygender = students.filter((student) => student.gender === gender);
    return bygender;
}
console.log(findStudentsByGender("Male"))

// 3. addStudent(id, name, total, gender) - add new student to list of students
function addStudent(id , name , total , gender){
    let obj = {id , name , total , gender};
    students.push(obj);
    return students
}

console.log(addStudent(3 , "Raj" , 55 , "Male"))


// 4. deleteStudentById(id) - deletes the student from the array using id
function deleteStudentById(id){
     students = students.filter(student => student.id !== id);
    return students;
}

console.log(deleteStudentById(1))



// 5. printStudents - print the list of students row. Each row is in format:

console.table(students)

// ID: 1, Name: Ram (Male), Total: 72
