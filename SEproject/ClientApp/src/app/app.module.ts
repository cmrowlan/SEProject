import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentEnrolledComponent } from './student-enrolled/student-enrolled.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    FacultyLoginComponent,
    StudentPageComponent,
    StudentEnrolledComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      { path: 'facultyLogin', component: FacultyLoginComponent},
      { path: 'student/:accessLevel/:id', component: StudentPageComponent},
      {path: 'home/:accessLevel/:id', component: HomeComponent},
      { path: 'counter/:accessLevel/:id', component: CounterComponent },
      { path: 'fetch-data/:accessLevel/:id', component: FetchDataComponent },
      {path: 'studentEnrolled/:accessLevel/:id', component: StudentEnrolledComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
