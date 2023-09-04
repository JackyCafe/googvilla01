import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from "../../shared.service";

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
  @Input() starttime:number|undefined;
  @Input() endtime:number|undefined;

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



//Todo
//將時間寫回DB

  addWorkRecord() {

    const now = new Date()
    console.log(now.toLocaleString())
    const year:number = now.getFullYear()
    const month:number = now.getMonth();
    const day:number = now.getDate();
    var val ={
      user:this.user,
      detail:this.detailId,
      working_date:this.convertDateFormat(year,month,day),
      start_time: this.starttime,
      end_time:this.endtime,
      spend_time:0,
      bonus:this.bonus,
      mood:this.mood
    };
    // console.log("val");
    // console.log(val);
    this.service.addWorkRecord(val,this.detailId).subscribe(
    {
      next:data=>{this.data=data;
      alert('新增完成'+this.data);
      console.log('data',this.data);
      },
      error:error=>{
        this.errorMessage = error.message;
        alert('新增完成'+this.errorMessage);

        console.error('There was an error!', error.message);
      }
    });

    console.log(this.data);
  }
}
