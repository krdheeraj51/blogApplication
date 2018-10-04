import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {
  //empty Object
  public currentBlog;
  public allBlogs = [
    {
      "blogId":"1",
      "lastModified":"2016-10-31T00:00:00.000Z",
      "created":"2016-10-31T00:00:00.000Z",
      "tags":["comedy","funny", "tag1"],
      "author":"Admin",
      "category":"comedy", 
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 Application",
      "title":"this blog 1"
    },{
      "blogId":"2",
      "lastModified":"2016-10-31T00:00:00.000Z",
      "created":"2016-10-31T00:00:00.000Z",
      "tags":[],
      "author":"Admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 2 Application",
      "title":"this blog 2"
    },{
        "blogId":"3",
        "lastModified":"2016-10-31T00:00:00.000Z",
        "created":"2016-10-31T00:00:00.000Z",
        "tags":[],
        "author":"Admin",
        "category":"comedy",
        "isPublished":true,
        "views":0,
        "bodyHtml":"this is blog body",
        "description":"this is blog 3 Application",
        "title":"this blog 3"
      }
  ];
  constructor(private _route: ActivatedRoute, private router: Router, public blogservice: BlogService) { 
    console.log("blog-view constructor is called ...");
  }

  ngOnInit() {
    console.log("ngonIt method  is called ....");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
     console.log(myBlogId);
     this.currentBlog = this.blogservice.getSingleBlogInformation(myBlogId);
     console.log(this.blogservice.getSingleBlogInformation(myBlogId));
    console.log(this.currentBlog);
  }
  ngOnDestroy() {
      console.log("blog-view ngOnDestroy is called ...");
  }

  // public getSingleBlogInformation(currentBlogId: any){
  //   for (let blog of this.allBlogs) {
  //     if (blog.blogId == currentBlogId) {
  //       this.currentBlog = blog;
  //     }
  //   }
  //   console.log(this.currentBlog);
  // }

}
