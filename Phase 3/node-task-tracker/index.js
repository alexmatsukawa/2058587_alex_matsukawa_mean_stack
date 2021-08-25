let http = require('http');
let url = require('url');
let fs = require('fs');
const { response } = require('express');

let taskDetails = JSON.parse(fs.readFileSync('dataStore.json').toString());
console.log(taskDetails);

let indexPage = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Task Planner</title>
    </head>
    <body>
        <h2>Welcome to Task Planner</h2>
        <a href="addTask">Click to Add a New Task</a>
    </body>
</html>
`

let addTaskPage = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Task Planner - Add Task</title>
    </head>
    <body>
        <h2><u>Add Task</u></h2>
        <form action="checkTask">
            <label>Employee ID: </label>
            <input type="text" name="empID"/><br>
            <label>Task ID: </label>
            <input type="text" name="taskID"/><br>
            <label>Task: </label>
            <input type="text" name="task"/><br>
            <label>Deadline: </label>
            <input type="date" name="deadline"/><br>
            <input type="submit" value="Add Task"/>
            <input type="reset" value="Reset Form"/><br/>
            <a href="deleteTask">Delete Task</a>&#9<a href="displayTasks">Show All Tasks</a>
        </form>
    </body>
</html>
`

let deleteTaskPage = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Task Planner - Delete Task</title>
    </head>
    <body>
        <h2><u>Delete Task</u></h2>
        <form action="checkDelete">
            <label>Task ID to be Deleted: </label>
            <input type="text" name="taskID"/><br>
            <input type="submit" value="Delete Task"/>
            <input type="reset" value="Reset Form"/><br/>
            <a href="addTask">Add Task</a>&#9<a href="displayTasks">Show All Tasks</a>
        </form
    </body>
</html>
`

const server = http.createServer((req, res) => {
    let urlInfo = url.parse(req.url, true);

    if(urlInfo.path != "/favicon.ico") {
        if(urlInfo.path == "/addTask") {
            res.write(addTaskPage);
        } else if(urlInfo.pathname == "/checkTask") {
            let newTask = urlInfo.query;
            let result = taskDetails.find(t=>t.taskID == newTask.taskID);
            if(result != undefined) {
                res.write(addTaskPage);
                res.write(`<p>There is already a task with that ID. Please add a unique task ID.</p>`);
            } else {
                taskDetails.push(newTask);
                fs.writeFileSync("dataStore.json", JSON.stringify(taskDetails));
                res.write(addTaskPage);
                res.write(`<p>Task Added Successfully!</p>`);
            }
        } else if(urlInfo.path == "/deleteTask") { 
            res.write(deleteTaskPage)
        } else if(urlInfo.pathname == "/checkDelete") {
            let selectedTask = urlInfo.query;
            let result = taskDetails.find(t=>t.taskID == selectedTask.taskID);
            if(result != undefined) {
                console.log(taskDetails);
                console.log(taskDetails.length);
                for(let i = 0; i < taskDetails.length; i++) {
                    if (taskDetails[i].taskID == selectedTask.taskID) {
                        taskDetails.splice(i, 1);
                        console.log(taskDetails);
                        fs.writeFileSync("dataStore.json", JSON.stringify(taskDetails));
                        res.write(deleteTaskPage);
                        res.write(`<p>Task Deleted Successfully!</p>`);
                    }
                }
            } else {
                res.write(deleteTaskPage);
                res.write(`<p>No task ID found. Please enter a valid task ID.</p>`);
            }
        } else if(urlInfo.path == "/displayTasks") {
            let listTaskPage = `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Task Planner - Task Display</title>
                </head>
                <body>
                    <h2><u>Task List</u></h2>
                    <table border="1">
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Task ID</th>
                            <th>Task Detail</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
            `
            //create table data and add to html variable
            for(let i = 0; i < taskDetails.length; i++) {
                listTaskPage += `
                <tr>
                    <td>` + taskDetails[i].empID + `</td>
                    <td>` + taskDetails[i].taskID + `</td>
                    <td>` + taskDetails[i].task + `</td>
                    <td>` + taskDetails[i].deadline + `</td>
                </tr>
                `
            }
            listTaskPage += `
                    </tbody>
                    </table>
                    <br>
                    <a href="addTask">Add Task</a>&#9<a href="deleteTask">Delete Task</a>
                </body>
            </html>
            `
            res.write(listTaskPage);
        } else {
            res.write(indexPage);
        }
    }
    res.end();
})

server.listen(8080, ()=> console.log("Server is running on port 8080..."));