import { Component, OnInit , ViewChild,ElementRef} from '@angular/core';
import { QuizService } from '../quiz.service';
import { Observable ,interval} from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  Route, Router} from '@angular/router';
import { enableDebugTools } from '@angular/platform-browser';


@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})

export class HtmlComponent implements OnInit {

  public fullname:string="";
  public questionsList:any=[];
  public currentQuestion:number=0;
  public points:number=0;
  public counter:number=0;
  public theCorrectAnswer:string="";
  public clickedAnswer:string="";
  public total:number=0;

  wrongAnswers:number=0;
  rightAnswers:number=0;
  notAnswered:string="You have not Answered this Question !!!"
  
  

  interval$:any;

  progressbar:string="0";
  // retrieve data from input value using #name = template reference

  constructor(private quizService:QuizService ,private modalService: NgbModal,private router:Router) { }

  ngOnInit(): void {

    // get name from loacal storage and place it in variable name
    this.fullname=localStorage.getItem("name")!;
      this.getQuestionList();
      this.startCounter();

  }
  // modal popup
  public open(modal: any): void {
    this.modalService.open(modal);

  }


  // call the service function to acquire qsts in api 
  getQuestionList(){
    this.quizService.getQuizQuestions()
    .subscribe(res=>{
      this.questionsList=res;
      console.log(res);
    })
  }

  // Arrow Button Functions
  nextQuestion(){
    this.currentQuestion++;
    this.theCorrectAnswer=this.questionsList[this.currentQuestion].correct_answer;
    console.log("Correct Answ = "+this.theCorrectAnswer);

    this.getProgressbarPercentage();
    

    if(this.theCorrectAnswer === this.clickedAnswer ){
      this.rightAnswers++;
    }
    else {
      this.wrongAnswers++ ;
      this.rightAnswers=0;
    }
    console.log("No.Correct Answ = "+this.rightAnswers);
    console.log("Clicked Answ ="+this.clickedAnswer);
   


    
  }
  previousQuestion(){
   this.currentQuestion--;
  }

  // Not clicked lists
   clicked=false;
   bgcolor='enable';
  // get value of clicked lists
  onClick(event:any) {
    this.clicked = !this.clicked;
    var target = event.target.attributes.id.value;
    this.clickedAnswer = target;
    
    if(this.clickedAnswer==="answer_a"){
      this.bgcolor = this.clicked ? 'Enable' : 'Disable';
    }else{
      this.bgcolor = this.clicked ? 'Disable':'Enable';
    }
    console.log(this.clickedAnswer);

  }




  // submit Quiz
  submitted=false;

  
  submitQuiz(){
    this.submitted=!this.submitted;
    this.total=((this.rightAnswers/this.questionsList.length)*100);
    console.log(this.rightAnswers,this.total,this.theCorrectAnswer);
  }

// counter
timer=30;
second$:any;
second=60;
  startCounter(){
    this.interval$ = interval(60000)
    .subscribe(val=>{
      this.timer--;
        if(this.timer===0){
            this.router.navigate(["/"])
        } 
    })
    this.second$ = interval(1000).subscribe(res=>{
      this.second--;
      if(this.second == 0){
        this.second = 60;
        this.second --;
      }
    })
  }



  // progress bar percentage
  

  getProgressbarPercentage(){
    this.progressbar = ((this.currentQuestion/this.questionsList.length)*100).toString();
    return this.progressbar;
  }

}
