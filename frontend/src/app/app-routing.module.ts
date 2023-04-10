import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignOnPageComponent } from './sign-on-page/sign-on-page.component';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  { path: 'login', component: LoginpageComponent },
  { path: 'signon', component: SignOnPageComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
