import {Component, Input, OnInit} from '@angular/core';
import { SharedService } from "../../shared.service";

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.css']
})
export class MajorComponent implements OnInit{
  @Input() starttime:any;
  @Input() endtime:any;
  lists:any=[];
  major_id: number | undefined;
  item: any;
  subitems: any|undefined;
  detailitems: any|undefined;
  subitems_id: any;
  id: any;
  works: any;
  detail:number|undefined;
  ActivateAddEditComp: boolean =false;
  detailName: any;
  user:number=1



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
    //detail 是一個字串，會出bug
    this.detailName = item.detail
    this.detail = item.id
    this.ActivateAddEditComp=true;
    // this.starttime=st;
    // this.endtime = et;
    this.service.getWorkRecord(this.detail).subscribe(data=>{
      this.works = data;
      //console.log(this.works)
    })

  }

  closeClick() {
    this.ActivateAddEditComp=false;
    // this.refreshDepList();
  }
}
