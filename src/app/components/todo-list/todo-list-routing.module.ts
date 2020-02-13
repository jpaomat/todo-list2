import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { DeleteListComponent } from './delete-list/delete-list.component';


const routes: Routes = [
  {path: '', redirectTo:'list', pathMatch:'full'},
  {path: 'list', component:ListComponent},
  {path: 'create', component:CreateListComponent},
  {path: 'update', component:UpdateListComponent},
  {path: 'delete', component:DeleteListComponent},
  {path: '**', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
