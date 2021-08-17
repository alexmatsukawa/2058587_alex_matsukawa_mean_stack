import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //REFS
  taskRef = new FormGroup({
    tID:new FormControl("", [Validators.required]),
    tOwner:new FormControl("", [Validators.required]),
    task:new FormControl("", [Validators.required]),
    deadline:new FormControl("", [Validators.required]),
  });

  //MISC STRINGS
  msg:string = "";

  //ARRAYS
  taskData:any;
  columnHeaders:string[] = ['tID', 'tOwner', 'task', 'deadline'];

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    if(localStorage.getItem("tasks") == undefined) {
      this.taskData = [];
      localStorage.setItem("tasks", JSON.stringify(this.taskData));
      this.taskData= "";
    }
    let newTask = this.taskRef.value;
    console.log(newTask);
    this.taskData = JSON.parse(localStorage.getItem("tasks")!);
    this.taskData.push({
      "tID" : newTask.tID,
      "tOwner" : newTask.tOwner,
      "task" : newTask.task,
      "deadline" : newTask.deadline
    })
    localStorage.setItem("tasks", JSON.stringify(this.taskData));
  }
}
