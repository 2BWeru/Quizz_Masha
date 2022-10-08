import { Component, OnInit , ViewChild,ElementRef} from '@angular/core';
import { QuizService } from '../quiz.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  public wrongAnswers:number=0;
  public rightAnswers:number=0;
  // retrieve data from input value using #name = template reference

  constructor(private quizService:QuizService ,private modalService: NgbModal) { }

  ngOnInit(): void {

    // get name from loacal storage and place it in variable name
    this.fullname=localStorage.getItem("name")!;
      this.getQuestionList();

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
    
  }
  previousQuestion(){
   this.currentQuestion--;
  }

  getAnswerA(currentQuestion:number,correct_answer:any){
    this.clickedAnswer=correct_answer;
    this.theCorrectAnswer=this.questionsList[this.currentQuestion].correct_answer;
   


    if(this.theCorrectAnswer == "answer_a" ){
      this.points+10;
      this.rightAnswers++;
    }else{
      this.points-10;
      this.wrongAnswers++;
    }
    // console.log(this.theCorrectAnswer,this.clickedAnswer);
    // console.log(this.points,this.wrongAnswers,this.rightAnswers);
    

  }
  getAnswerB(currentQuestion:number,correct_answer:any){
    this.clickedAnswer=correct_answer;
    this.theCorrectAnswer=this.questionsList[this.currentQuestion].correct_answer;


    if(this.theCorrectAnswer == "answer_b" ){
      this.points+10;
      this.rightAnswers++;
    }else{
      this.points-10;
    }
    // console.log(this.theCorrectAnswer,this.clickedAnswer);
    // console.log(this.points,this.wrongAnswers,this.rightAnswers);

  }
  getAnswerC(currentQuestion:number,correct_answer:any){
    this.clickedAnswer=correct_answer;
    this.theCorrectAnswer=this.questionsList[this.currentQuestion].correct_answer;


    if(this.theCorrectAnswer == "answer_c" ){
      this.points+10;
      this.rightAnswers++;
    }else{
      this.points-10;
    }
    // console.log(this.theCorrectAnswer,this.clickedAnswer);
    // console.log(this.points,this.wrongAnswers,this.rightAnswers);

  }
  getAnswerD(currentQuestion:number,correct_answer:any){
    this.clickedAnswer=correct_answer;
    this.theCorrectAnswer=this.questionsList[this.currentQuestion].correct_answer;


    if(this.theCorrectAnswer == "answer_d" ){
      this.points+10;
      this.rightAnswers++;
    }else{
      this.points-10;
    }
    // console.log(this.theCorrectAnswer,this.clickedAnswer);
    // console.log(this.points,this.wrongAnswers,this.rightAnswers);

  }

  // submit Quiz
  submitted=false;

  
  submitQuiz(){
    this.submitted=true;
    this.total=Math.trunc((this.rightAnswers*100)/this.questionsList.length);
    console.log(this.rightAnswers,this.total,this.theCorrectAnswer);
    
   
   
  }
}
