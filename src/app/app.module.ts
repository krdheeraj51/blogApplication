import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CreateComponent } from './create/create.component';
import { BlogViewComponent } from './blog-view/blog-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  //  PostBlogComponent,
    AboutComponent,
    CreateComponent,
    BlogViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'create', component: CreateComponent},
      {path: 'about' , component : AboutComponent },
      {path: 'blog/:blogId' , component: BlogViewComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
