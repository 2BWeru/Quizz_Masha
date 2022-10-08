import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

@Pipe({
  name: 'objectToArray',
})
export class QuizService {

  constructor(private http:HttpClient) { }
  BaseHtmlUrl="https://quizapi.io/api/v1/questions?apiKey=UvJWWhRup0tmxi53AsB11ruaJogO2Zjjt968vlHr&limit=17&tags=HTML"

  ApiKey="UvJWWhRup0tmxi53AsB11ruaJogO2Zjjt968vlHr"

  getQuizQuestions(Object:any=[]){
    return this.http.get<any>(this.BaseHtmlUrl);
  };
}
