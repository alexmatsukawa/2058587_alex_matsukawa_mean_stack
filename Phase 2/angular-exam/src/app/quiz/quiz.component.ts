import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
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
  selectedAns:string[] = [];
  innerHTMLString:string = "";
  click:boolean = false;

  constructor(public form:FormBuilder, public quiz:QuizService, @Inject(DOCUMENT) public _document: Document) {
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

  submitQuiz() {
    Object.keys(this.myForm.value).forEach((key)=> this.selectedAns.push(this.myForm.value[key]));
    let correctCounter:number = 0;
    for(let i = 0; i < this.questionBank.length; i++) {
      if(this.questionBank[i].correctAns == this.selectedAns[i]) {
        let selectedRadio = document.getElementById(this.questionBank[i].correctAns);
        selectedRadio!.setAttribute("style", "color: #007d00")
        correctCounter++;
      } else {
        let selectedRadio = document.getElementById(this.selectedAns[i]);
        selectedRadio!.setAttribute("style", "color: #FF0000")
        let correctRadio = document.getElementById(this.questionBank[i].correctAns);
        correctRadio!.setAttribute("style", "color: #007d00")
      }
    }
    this.innerHTMLString = "<h2>" + correctCounter + "/10 ";
    if(correctCounter < 7) {
      this.innerHTMLString += "Failed. Please try to get 70% or higher to pass.</h2>" 
    } else {
      this.innerHTMLString += "Passed! Congratulations!</h2>"
    }
    this.myForm.disable();
    this.click = !this.click;
  }

  resetVals() {
    this.selectedAns = [];
    this.innerHTMLString = "";
    this._document.defaultView?.location.reload();
  }
}
