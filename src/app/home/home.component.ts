import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
