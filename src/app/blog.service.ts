import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public allBlogs = [
    {
      "blogId":"1",
      "lastModified":"2016-10-31T00:00:00.000Z",
      "created":"2016-10-31T00:00:00.000Z",
      "tags":[],
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
  constructor() { 
    console.log("Blog Service Constructor is called ....");
  }
  public currentBlog;
  public getAllBlogs(): any {
      return this.allBlogs;
  }
  public getSingleBlogInformation(currentBlogId: any) {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
  }
}
