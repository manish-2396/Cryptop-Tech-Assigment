/*
12. Write Javascript code to update the given object with following
operations:
For the given object:
*/

var task = {
  id: 2,
  status: "active",
  isCompleted: false,
  spendTimes: [20],
  description: "A new sample task for Javascript",
  comments: [
    { date: "19-04-2022 05:30PM", comment: "Task updated with description" },
  ],
  project: { id: 2, code: "Questions" },
  user: { id: 4, name: "Ram" },
  categories: ["object", "functions"],
};

// Implement following actions in javascript:

// 1. Change status to in-progress.
task.status = "in-progress";

// 2. Add new comment with description: 'This is a new comment' with current date and time'
task.comments.push({
  date: new Date(),
  comment: "This is a new comment' with current date and time",
});

// 3. Print the project code of the task
console.log("Project Code", task?.project?.code);

// 4. Print the categories with comma separated
console.log(task.categories.join(" "));

// 5. Add new category - "array" and print the categories again
task.categories.push("array");

// 6. Change the description
task.description = "new description";

// 7. Add spend time with 5, 15, 20

task.spendTimes.push(5);
task.spendTimes.push(15);
task.spendTimes.push(20);

// 8. Print the name of user
console.log(task.user.name);

// 9. Print all comment descriptions

for (let comment of task.comments) {
  console.log(comment.comment);
}

// 10. Make task completed

task.isCompleted = true;

// Print the objects after doing the actions



console.log(task);
