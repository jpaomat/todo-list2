import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo';
import { chunk } from 'lodash';
import { ChuckPipe } from 'src/app/shared/pipes/chuck.pipe';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss']
})
export class UpdateListComponent implements OnInit {
  page = 1;
  todosfilter: Todo[]=[];
  auxTodos: Todo[]=[];
  todos: Todo[][]=[];
  search: string;
  constructor() {}
  ngOnInit() {
    this.getRequest();
  }
  getRequest() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      this.todos = chunk(todos, 10);
      this.todosfilter = todos;
      this.auxTodos = todos;
    });
  }
  myFilter(even: Event){
    this.todosfilter = this.auxTodos.filter(tod =>{
      const target = even.target as HTMLInputElement;
      console.log(target.value);
      return tod.title.includes(target.value);
    });
    this.todos = chunk(this.todosfilter, 10);
    this.page=1;
  }


  to(index: number) {
    if ( index >= 1 && index <= 20 ) {
      this.page = index;
    }
  }
}
