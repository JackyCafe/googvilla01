import { Component,OnInit } from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.css']
})
export class MajorComponent implements OnInit{
  lists:any=[];
  major_id: number | undefined;
  item: any;
  subitems: any|undefined;
  detailitems: any|undefined;
  subitems_id: any;
  id: any;
  works: any;

  constructor(private service:SharedService) {
  }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(): void {
    this.service.getMajorList().subscribe(data=>{
      this.lists = data;

    });
  }

  /* 點擊Major Button 後呼叫subitem
  * */
  openMajorModal(item: any) {
    this.major_id = item.id;
    this.item = item.item;
    this.service.getSubItem(this.major_id).subscribe(data=>{
      this.subitems =data;
    });
  }

  openSubModal(item: any) {
    this.subitems_id = item.id;
    this.service.getDetailItem(this.subitems_id).subscribe(data=>{
      this.detailitems =data;
    });
  }

  openWorkRecord(item:any){
    this.id = item.id
    this.service.getWorkRecord(this.id).subscribe(data=>{
      this.works = data;
    })

  }

}
