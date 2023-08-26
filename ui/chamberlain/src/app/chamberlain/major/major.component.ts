import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.css']
})
export class MajorComponent implements OnInit {

  lists:any=[];
  subitems:any=[];
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshMajorList();
  }

  refreshMajorList(): void {
    this.service.getMajorList().subscribe(data=>{
      this.lists = data;

    });
  }

  getSubItem() {
    this.service.getSubItem().subscribe(data=>{
      this.subitems = data;      
    })
  }

}
