import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './componentes/experience/editeducacion.component';
import { EditexperienciaComponent } from './componentes/experience/editexperiencia.component';
import { NewEducacionComponent } from './componentes/experience/new-educacion.component';
import { NewExperienciaComponent } from './componentes/experience/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'newexp',component:NewExperienciaComponent},
  {path:'newedu', component:NewEducacionComponent},
  {path:'edit/:id',component:EditeducacionComponent},
  {path: 'editexp/:id',component:EditexperienciaComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
