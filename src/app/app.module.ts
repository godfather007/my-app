import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

// import { login } from './login/login';
import { loginService } from './services/userService'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    // login,
    //loginService
  ],
  imports: [
     BrowserModule, HttpModule,
     RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login',  component: LoginComponent  },
      { path: 'signup',  component: SignupComponent  },
      { path: 'forgotpassword',  component: ForgotpasswordComponent  },
     ])
  ],
  providers: [loginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
