import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foorm',
  templateUrl: './foorm.component.html',
  styleUrls: ['./foorm.component.css']
})
export class FoormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  onSubmit(value:any){
    console.log(value);
  }


}
