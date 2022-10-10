import { Component, OnInit,ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { Hero } from '../hero';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import {  Router} from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  @ViewChild("name") nameKey!:ElementRef;

  public btnName :any;
 
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

  onSubmit(){this.submitted=true;}

}
