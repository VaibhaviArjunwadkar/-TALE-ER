import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignOnPageComponent } from './sign-on-page/sign-on-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { StorypageComponent } from './storypage/storypage.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { HighlightDirective } from './highlight.directive';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CapitalizePipe } from './capitalize.pipe';
import { DemoComponent } from './demo/demo.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  { path: 'login', component: LoginpageComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'signon', component: SignOnPageComponent },
  { path: 'home', component: HomecomponentComponent },
  { path: 'story/:id', component: StorypageComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'about', component: AboutComponent },
  { path: 'demo', component: DemoComponent },
  { path: '*', component: LoginpageComponent },
  { path: '', component: LoginpageComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    SignOnPageComponent,
    LoginpageComponent,
    HomecomponentComponent,
    StorypageComponent,
    FavouritesComponent,
    ContactusComponent,
    AboutComponent,
    HighlightDirective,
    ContactUsComponent,
    CapitalizePipe,
    DemoComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
