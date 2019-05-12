import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from 'src/app/app.routing';
import { MainComponent } from './main/main.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { WorstEmpComponent } from './worst-emp/worst-emp.component';
import { GoodEmpComponent } from './good-emp/good-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    LeftsidebarComponent,
    HeaderComponent,
    MainComponent,
    CompanyComponent,
    EmployeeComponent,
    WorstEmpComponent,
    GoodEmpComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
