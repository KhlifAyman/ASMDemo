import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'client', redirectTo: 'client/index', pathMatch: 'full'},
  { path: 'client/index', component: IndexComponent },
  { path: 'client/create', component: CreateComponent },
  { path: 'client/edit/:idClient', component: EditComponent }
];
//ggytfytfytf
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
