import {Component,OnInit, Input} from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-workrecord',
  templateUrl: './workrecord.component.html',
  styleUrls: ['./workrecord.component.css']
})
export class WorkrecordComponent implements  OnInit{
  @Input() user: number | undefined
  @Input() detailName: number |undefined
  @Input() det:any;

  bonus:number|undefined;
  mood:number|undefined;

  constructor(private service :SharedService) {
  }
  ngOnInit(): void {

  }

  addWorkRecord() {

    const now = new Date()
      var val ={
        user:this.user,
        detail:this.det[0].detail,
        working_date:now.toLocaleDateString(),
        start_time: now.toLocaleString(),
        end_time:now.toLocaleString(),
        spend_time:0,
        bonus:this.bonus,
        mood:this.mood
      };
      console.log("val")
      console.log(val)
  }
}
