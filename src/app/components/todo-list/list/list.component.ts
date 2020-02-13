import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo';
import { chunk } from 'lodash';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  page = 1;
  //todos: Todo[][];
  todos: Todo[];
  todos1: Todo[];
  search: string;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getRequest();
  }
  getRequest() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      //this.todos = chunk(todos, 10);
      this.todos = todos;
      console.log(this.todos);
    });
  }

  to(index: number) {
    if ( index >= 1 && index <= 20 ) {
      this.page = index;
    }
  }
}
