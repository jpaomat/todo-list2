import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateListComponent } from 'src/app/components/todo-list/create-list/create-list.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private modalService: NgbModal ) { }

  ngOnInit(): void {
  }
  addTodo() {
    //mostrar componente createList, se debe inyectar servicio de ngBootstrap para poder usar los modals (NgbModal), antes se importa en el modulo principal(NgbModule)
    const modal = this.modalService.open(CreateListComponent);
    modal.result.then(
      this.formClose.bind(this),
      this.formClose.bind(this)
    );
  }
  formClose() {
    alert('cerrado');
  } //para que el modal funcione se coloca el entrycomponents en el modulo principal
}
