import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtelekComponent } from './Part/etelek/etelek.component';
import { ItalokComponent } from './Part/italok/italok.component';
import { BemutatkozasComponent } from './Part/bemutatkozas/bemutatkozas.component';

const routes: Routes = [
  { path: "etelek", component: EtelekComponent },
  { path: "italok", component: ItalokComponent },
  { path: "bemutatkozas", component: BemutatkozasComponent },
  { path: " ", component: BemutatkozasComponent },
  { path: "**", component: BemutatkozasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
