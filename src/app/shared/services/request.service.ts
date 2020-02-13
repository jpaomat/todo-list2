import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/todo';
import { chunk } from 'lodash';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  //todos: Todo[][];
  constructor(private http: HttpClient) { }
  /*getRequest(todos: Todo[][]){
    this.http.get('https://jsonplaceholder.typicode.com/todos')
    .subscribe((todo: Todo[]) => {
      return todos = chunk(todo, 10);
     })
  }*/
  saveData(form: Todo):Promise<Document>{
    return fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    }).then(response => response.json())/*.then((todo: Todo) => {
      console.log(todo);
      router.navigateByUrl('list/todoList');
    });*/
  }
}
