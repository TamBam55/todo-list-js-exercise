// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskDescriptions = [];
// const taskComplete = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete

// function newTask(title, description) {
//   const task = {
//     title: title,
//     description: description,
//     complete: false,

//     logState: function() {
//       console.log(`{this.title} has{this.complete  " " : " not "}been completed`);
//     };

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    Status: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    Completed: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE CHANGES BELOW



