import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule, Routes } from '@angular/router';
import { OperationlistComponent } from './operationlist/operationlist.component';
import { HttpModule } from '@angular/http'
import { ApiService } from './api.service'
import { HttpClientModule } from '@angular/common/http';
import { DonorlistComponent } from './donorlist/donorlist.component';
import { DonorregistrationComponent } from './donorregistration/donorregistration.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'operationlist', component: OperationlistComponent },
  
  { path: 'donorlist' , component :DonorlistComponent },

  { path:'donorregistration' , component:DonorregistrationComponent}

 // { path: '**', component: PagenotfoundComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    LoginComponent,
    OperationlistComponent,
    DonorlistComponent,
    DonorregistrationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
