/*
5. Write a JavaScript program to print the keys and values of the given
object
Create a function which accepts a object and prints the output like the following:
Input and Output:

printObject({ name: "John", phone: "9865412312" });
Keys: name.phone;
Values: John, 9865412312;
processObject({ id: 2, status: "Active", title: "test" });
Keys: id, status, title;
Values: 2, Active, test;
*/

function printObject(obj){
    let keys = []
    let values = []
    for(let key in obj){
        keys.push(key);
        values.push(obj[key])
    }

    console.log("Keys: ", keys.join(", ") );
    console.log("Values: ", values.join(", ") );

}

printObject({ name: "John", phone: "9865412312" });
printObject({ id: 2, status: "Active", title: "test" });
