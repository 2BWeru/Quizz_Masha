import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  contacts = new Hero("","","");

  newHero(){
    this.contacts = new Hero("","","")
  };

   // submit form
  submitted=false

  onSubmit(){this.submitted=true;}

}
