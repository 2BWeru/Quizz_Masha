import { Component, OnInit , ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  // retrieve data from input value using #name = template reference
  @ViewChild('name') nameKey!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // store name in local storage
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }
}
