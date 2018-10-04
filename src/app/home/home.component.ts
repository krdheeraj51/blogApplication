import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
 public allBlogs;
  constructor(public blogservice: BlogService) {
    console.log('BlogService is called ...');
    console.log("Home Component Constructor is called ..");
   }

  ngOnInit() {
    console.log("Home Component ngOnInit is called ..");
    this.allBlogs = this.blogservice.getAllBlogs();
    console.log(this.allBlogs);
  }
  ngOnDestroy() {
    console.log("Home Component ngOnDestory is called ..");
  }

}
