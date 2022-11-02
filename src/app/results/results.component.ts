import { Component, OnInit } from '@angular/core';
import { TotalService } from '../total.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  // define datepipe

  datePipe: DatePipe = new DatePipe('en-US');

 


  constructor(private totalService:TotalService) { }

  score:any;
  today:number = Date.now();
  test:string="";
  username:any;

  ngOnInit(): void {
    this.totalService.currentData.subscribe(data => {
      this.score=data;
      console.log(this.score);

      this.username=localStorage.getItem("namePerson");
   });

   this.totalService.currentType.subscribe(data => {
    this.test=data;
    console.log(this.test);
 });
}



}
