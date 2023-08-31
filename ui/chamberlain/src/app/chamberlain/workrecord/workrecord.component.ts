import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from "../../shared.service";

@Component({
  selector: 'app-workrecord',
  templateUrl: './workrecord.component.html',
  styleUrls: ['./workrecord.component.css']
})
export class WorkrecordComponent implements  OnInit{
  @Input() user: number | undefined
  @Input() detailName: number |undefined
  @Input() det:any;
  @Input() detailId:number|undefined

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


 convertDateTimeFormat(inputDateTime: string): string {
  const parts = inputDateTime.split(' ');
  if (parts.length !== 2) {
      throw new Error('Invalid input date time format.');
  }

  const datePart = parts[0];
  const timePart = parts[1];

  const dateComponents = datePart.split('/');
  if (dateComponents.length !== 3) {
      throw new Error('Invalid date format. Expected YYYY/MM/DD.');
  }

  const year = parseInt(dateComponents[0]);
  const month = parseInt(dateComponents[1]);
  const day = parseInt(dateComponents[2]);

  const timeComponents = timePart.match(/(\d+):(\d+):(\d+)/);
  if (!timeComponents) {
      throw new Error('Invalid time format.');
  }

  const hour = parseInt(timeComponents[1]);
  const minute = parseInt(timeComponents[2]);
  const second = parseInt(timeComponents[3]);

  const isoDate = new Date(year, month - 1, day, hour, minute, second);
  const timeZoneOffset = 8 * 60; // Assuming +08:00 timezone offset
  const isoString = isoDate.toISOString();
  const formattedDateString = isoString.substring(0, 10);
  const formattedTimeString = isoString.substring(11, 19);
  const formattedOffset = `+${String(timeZoneOffset).padStart(2, '0')}:00`;

  return `${formattedDateString}T${formattedTimeString}`;
}





  addWorkRecord() {

    const now = new Date()
    const year:number = now.getFullYear()
    const month:number = now.getMonth();
    const day:number = now.getDate();
    var val ={
      user:this.user,
      detail:this.det[0].detail,
      working_date:this.convertDateFormat(year,month,day),
      start_time: this.convertDateTimeFormat(now.toLocaleString()),
      end_time:this.convertDateTimeFormat(now.toLocaleString()),
      spend_time:0,
      bonus:this.bonus,
      mood:this.mood
    };
    this.service.addWorkRecord(val,this.detailId).subscribe(
    {
      next:data=>{this.data=data;
      alert('新增完成'+this.data);
      console.log('data',this.data);
      },
      error:error=>{
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);

      }
    });

    console.log("val")
    console.log(this.data);
  }
}
