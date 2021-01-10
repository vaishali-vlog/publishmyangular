import { Component, OnInit } from '@angular/core';
import { FreeApiService} from '../services/freeapi.service';
import{ Blogg} from '../classes/blogg';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  lstcomments:Blogg[];

  constructor( private _freeApiService: FreeApiService) { }
  blog:any;
  
data1:any;

  ngOnInit(): void {

    this._freeApiService.getdetail()
  .subscribe(
      data=>
      {
         this.lstcomments = data;
         console.log(this.lstcomments);
         console.log(this.lstcomments.blog)
         this.lstcomments=this.lstcomments.blog;
         this.lstcomments=this.blog;
  });
}
  }


