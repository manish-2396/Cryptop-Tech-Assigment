/*
16. Write Javascript code to calculate the number of visiting birds in a
specific week
Implement a function birdsInWeek that accepts an array of bird counts per day and a week number.
It returns the total number of birds that you counted in that specific week. You can assume weeks
are always tracked completely.
Input and Output:
var birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
birdsInWeek(birdsPerDay, 2)
12
 */


function birdsInWeek(birdsPerDay , week){
    let temp = birdsPerDay.splice(7*(week-1) , 7);
    let total = temp.reduce((pre , curr) => {
        return pre + curr
    })

    return total
}


var birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
let ans = birdsInWeek(birdsPerDay, 2)

console.log(ans);