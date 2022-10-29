import { Component, OnInit,ElementRef, ViewChild} from '@angular/core';
import { Hero } from '../hero';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  @ViewChild("name") nameKey!:ElementRef;

  public btnName :any;
  public quizAttempts:number=1;
  public attempts:number=0;

 
  constructor(private modalService: NgbModal,private router:Router) { }

  ngOnInit(): void {
   
  }
// modal popup
  public open(modal: any): void {
    this.modalService.open(modal);

  }

  
  // store name in local storage
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);

    if(this.btnName="html"){
      // console.log(this.btnName);
      this.router.navigate(["/html"]);
    }else{
      this.router.navigate(["/"])
    }
  }
    
 
  contacts = new Hero("","","");

  newHero(){
    this.contacts = new Hero("","","")
  };

   // submit form
  submitted=false

  // onSubmit(){this.submitted=true;}

  saveName(event:any){
    if(localStorage.getItem("emailPerson") !== null){
      console.log(localStorage.getItem("emailPerson"));
        this.router.navigate(['/blog']);
        alert("You have already Registered")
    }else{
      console.log(" null");
      this.router.navigate(['/names']);
    }
  }

  quizPath(){

  }


  onSubmit(){
    console.log("adding form values ");
    // console.log(addMountForm.value);
}



}
