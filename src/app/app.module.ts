import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProyectsComponent } from './componentes/proyects/proyects.component';
import {HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider, InterceptorService } from './service/interceptor-service';

import { NewExperienciaComponent } from './componentes/experience/new-experiencia.component';
import { NewEducacionComponent } from './componentes/experience/new-educacion.component';
import { EditeducacionComponent } from './componentes/experience/editeducacion.component';
import { EditexperienciaComponent } from './componentes/experience/editexperiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    FooterComponent,
    ProyectsComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    NewEducacionComponent,
    EditeducacionComponent,
    EditexperienciaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
