import {Component,OnInit, Input} from '@angular/core';
import {SharedService} from "../../shared.service";

// @ts-ignore
@Component({
  selector: 'app-subitem',
  templateUrl: './subitem.component.html',
  styleUrls: ['./subitem.component.css']
})
export class SubitemComponent implements OnInit{
  @Input() major_id: any
  @Input() item:any
  lists: any;
  private selectedItem= { "id":0, "item":"" };

  constructor(private servic:SharedService) {

  }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(){
    this.servic.getSubItem(this.major_id).subscribe(data=>{
      this.lists=data;
    })
  }
  openModal(item: any) {
    this.selectedItem = item;
    // this.ActivateComp = true;
  }
}
