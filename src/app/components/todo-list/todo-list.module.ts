import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { ListComponent } from './list/list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { DeleteListComponent } from './delete-list/delete-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { ChuckPipe } from 'src/app/shared/pipes/chuck.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ListComponent, UpdateListComponent, DeleteListComponent, FilterPipe, ChuckPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    TodoListRoutingModule,
  ]
})
export class TodoListModule { }
