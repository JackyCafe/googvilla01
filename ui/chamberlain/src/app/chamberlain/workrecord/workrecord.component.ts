import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from "../../shared.service";
import {MajorComponent} from "../major/major.component";

@Component({
  selector: 'app-workrecord',
  templateUrl: './workrecord.component.html',
  styleUrls: ['./workrecord.component.css']
})
export class WorkrecordComponent implements  OnInit{
  @Input() user: number | undefined;
  @Input() detailName: number |undefined;
  @Input() det:any;
  @Input() detailId:number|undefined;
  @Input() starttime:any;
  @Input() endtime:any;

  bonus:number|undefined;
  mood:number|undefined;
  smonth:string="";
  sday:string="";
  data:any;
  errorMessage:any;

  constructor(private service :SharedService) {

  }
  ngOnInit(): void {

  }

  convertDateFormat(year: number,month:number,day:number): string {
    if (month<10)  {
      this.smonth = '0'+month.toString();
    }else{
       this.smonth = month.toString();
    }
    if (day<10)  {
      this.sday = '0'+day.toString();
    }else{
       this.sday = day.toString();
    }
    return `${year}-${this.smonth}-${this.sday}`;

}

  addWorkRecord() {

    const now = new Date()
    const year:number = now.getFullYear()
    const month:number = now.getMonth()+1;
    const day:number = now.getDate();
    var val ={
      user:this.user,
      detail:this.detailId,
      working_date:this.convertDateFormat(year,month,day),
      start_time: this.starttime,
      end_time:this.endtime,
      spend_time:this.calculateTimeDifference(this.starttime,this.endtime),
      bonus:this.bonus,
      mood:this.mood
    };

    this.service.addWorkRecord(val,this.detailId).subscribe(
    {
      next:data=>{this.data=data;
      alert('新增完成');
      console.log('data',this.data);
      },
      error:error=>{
        this.errorMessage = error.message;
        alert('新增完成'+this.errorMessage);

        console.error('There was an error!', error.message);
      }
    });
    //this.service.sendCloseClickSignal(); // 發出事件通知 MajorComponent 執行 closeClick 方法
  }

  getWorkRecord(){
    const now = new Date()
    const year:number = now.getFullYear()
    const month:number = now.getMonth()+1;
    const day:number = now.getDate();
    const date:string =this.convertDateFormat(year,month,day)
    this.service.getWorkRecord(null,date).subscribe(
      data=>{
        this.data = data;
      }
    )
    console.log(this.data);
  }

  calculateTimeDifference(start_time: string, end_time: string): number  {
    const startTimeArray = start_time.split(':');
    const endTimeArray = end_time.split(':');
    const start = new Date();
    start.setHours(parseInt(startTimeArray[0]), parseInt(startTimeArray[1]), 0, 0);
    const end = new Date();
    end.setHours(parseInt(endTimeArray[0]), parseInt(endTimeArray[1]), 0, 0);
    const timeDifference = end.getTime() - start.getTime();
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    return hours*60+minutes;
  }

}
