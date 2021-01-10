import { Injectable } from '@angular/core';
import{ Observable} from 'rxjs';
import{ HttpClient} from '@angular/common/http';
import{ Comments} from '../classes/Comments';

 
@Injectable({
  providedIn: 'root'
})
export class FreeApiService {

  
  serverUrl:"https://docully.com/blog/api/blogs";
  
  constructor(private httpclient:HttpClient ) { }

getcomments():Observable<any>{
return this.httpclient.get("https://docully.com/blog/api/blogs");

}

getdetail():Observable<any>{
  return this.httpclient.get("https://docully.com/blog/api/view/this-is-a-test-blog-2/blogs");
  

}

}
