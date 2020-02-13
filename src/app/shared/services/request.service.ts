import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/todo';
import { chunk } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  //todos: Todo[][];
  constructor(private http: HttpClient) { }
  getRequest(todos: Todo[][]){
    this.http.get('https://jsonplaceholder.typicode.com/todos')
    .subscribe((todo: Todo[]) => {
      return todos = chunk(todo, 10);
     })
  }
}
