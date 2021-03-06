import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {
  newTodoForm: FormGroup;
  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.newTodoForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      userId: [null, Validators.required],
      completed : this.formBuilder.control(false),
      /*group: new FormControl({
        attr: new FormControl()
      })*/
    });
    console.log(this.newTodoForm);
  }
  saveData(): void{
    if (this.newTodoForm.invalid) {
      return;
    }
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(this.newTodoForm.value),
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    }).then(response => response.json()).then((todo: Todo) => {
      console.log(todo);
      this.router.navigateByUrl('list/todoList');
    });
  }
  clearData(){
    this.createForm();
  }
}
