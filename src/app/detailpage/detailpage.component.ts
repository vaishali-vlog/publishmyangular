import { Component, OnInit } from '@angular/core';
import { FreeApiService} from '../services/freeapi.service';
import{ Comments} from '../classes/Comments';


@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
  lstcomments:Comments[];
  blogs:any;
  constructor( private _freeApiService: FreeApiService) { }

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


