import { Component, OnInit } from '@angular/core';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private totalService:TotalService) { }

  score:any;
  test:string="";

  ngOnInit(): void {
    this.totalService.currentData.subscribe(data => {
      this.score=data;
      console.log(this.score);
   });

   this.totalService.currentType.subscribe(data => {
    this.test=data;
    console.log(this.test);
 });
}

}
