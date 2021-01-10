import { Component, OnInit } from '@angular/core';

import { FreeApiService} from '../services/freeapi.service';
import{ Comments} from '../classes/Comments';


@Component({
  selector: 'app-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.css']
})
export class MainBlogComponent implements OnInit {
  lstcomments:Comments[];
  data1:any;

  constructor(  private _freeApiService: FreeApiService) { }

  ngOnInit(): void {
    this._freeApiService.getcomments()
    .subscribe(
      data=>
      {
         this.lstcomments = data;
         console.log(this.lstcomments);
         console.log(this.lstcomments.blogs)
         this.lstcomments=this.lstcomments.blogs;
  
  
    });
  }
  }


