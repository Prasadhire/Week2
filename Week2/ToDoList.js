let todo = [];

function call() {

    while(true){
    let req = prompt("Please enter your request (add, delete, list, quit)");

    if (req === "add") {
        let task = prompt("Please enter your task");
        todo.push(task);
        console.log(todo);
    } 
    else if (req === "delete") {
        let task = prompt("Please enter the task you want to delete");
        let index = todo.indexOf(task);
        if (index !== -1) {
            todo.splice(index, 1);
            console.log(todo);
        } else {
            console.log("Task not found");
        }
    }
    else if (req === "list") {
        console.log(todo);
    } 
    else if (req === "quit") {
        console.log("Quitting app...");
        break;
    } 
    else {
        console.log("Invalid request");
    }
}
}
