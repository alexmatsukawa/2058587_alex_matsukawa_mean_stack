import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questionBank:Array<Quiz> = []; //need to read from json file
  myForm:FormGroup;

  constructor(public form:FormBuilder, public quiz:QuizService) {
    this.myForm = form.group({});
  }

  ngOnInit(): void {
    //console.log("before sub");
    this.quiz.getQuestions().subscribe(data=> {
      for(let q of data) {
        this.myForm.addControl(q.question, this.form.control(""));
        this.questionBank.push(q);
        console.log(this.questionBank);
      }
    });
    //console.log("after foreach");
  }

  submit() {
    console.log(this.myForm.value);
  }
}
