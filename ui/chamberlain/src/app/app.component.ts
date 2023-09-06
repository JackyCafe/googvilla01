import { Component,OnInit } from '@angular/core';
import {SharedService} from "./shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'chamberlain';
  private clickedTimes: string[] = [];
  startTime: string | undefined; // 追蹤開始時間
  endTime: string | undefined; // 追蹤結束時間
  data:any
  summary_data:any
  startTimeRange: string = ''; // 起始时间
  endTimeRange: string = '';   // 结束时间

  constructor(private service:SharedService) {
  }

  ngOnInit(): void {
    this.getSummaryReport();
        throw new Error('Method not implemented.');
    }

  /*start time  */
  onTimerClick(time: string) {
    this.clickedTimes.push(time);

    if (this.clickedTimes.length === 2) {
      this.startTime = this.clickedTimes[0];
      this.endTime = this.clickedTimes[1];

    } else if (this.clickedTimes.length > 2) {
      // 如果已經點擊了三個，重新設定開始和結束時間
      this.startTime = time;
      this.endTime = "";
      this.clickedTimes = [time];
    }
  }

  isBetweenTime(time: string): boolean {
    if (this.startTime && this.endTime) {
      const time1 = this.parseTime(this.startTime);
      const time2 = this.parseTime(this.endTime);
      const currentTime = this.parseTime(time);
      if (time1 && time2 && currentTime) {
        return (
          (currentTime >= time1 && currentTime <= time2) ||
          (currentTime >= time2 && currentTime <= time1)
        );
      }
    }
    return false;
  }

  parseTime(timeStr: string): Date | null {
    // 將時間字串解析為日期對象
    const parts = timeStr.split(':');
    if (parts.length === 2) {
      const hours = parseInt(parts[0]);
      const minutes = parseInt(parts[1]);

      if (!isNaN(hours) && !isNaN(minutes) && hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
        const date = new Date();
        date.setHours(hours, minutes, 0, 0);
        return date;
      }
    }
    return null;
  }

  getWorkRecord(){
    const now = new Date()
    const year:number = now.getFullYear()
    const month:number = now.getMonth()+1;
    const day:number = now.getDate();
    const date:string =this.convertDateFormat(year,month,day)
    // 设置时间区间

    this.service.getWorkRecord(null,date).subscribe(
      data=>{
        this.data = data;
        this.startTimeRange = this.data.startTime;
        this.endTimeRange = this.data.endTime;
        this.highlightDivsInRange();

      }
    )
  }
  highlightDivsInRange() {
    // 这里您可以遍历数据，根据 startTimeRange 和 endTimeRange 设置 div 的颜色
    // 例如，将数据中的时间字段与时间区间进行比较，并设置相应的 CSS 类来改变颜色
    // 这里只是一个示例，具体实现根据您的数据结构和需求进行调整
    this.data.forEach((record: any) => {
      const recordTime = `${record.working_date} ${record.start_time}`;
      if (recordTime >= this.startTimeRange && recordTime <= this.endTimeRange) {
        // 在此设置 CSS 类以改变 div 的颜色
        // 例如：record.highlighted = true;
      }
    });
  }

  convertDateFormat(year: number,month:number,day:number): string {
    let smonth = "";
    let sday: string="";
    if (month<10)  {
      smonth = '0'+month.toString();
    }else{
      smonth = month.toString();
    }
    if (day<10)  {
      sday = '0'+day.toString();
    }else{
      sday = day.toString();
    }
    return `${year}-${smonth}-${sday}`;

  }

  //每日摘要
  getSummaryReport(){
    const now = new Date()
    const year:number = now.getFullYear()
    const month:number = now.getMonth()+1;
    const day:number = now.getDate();
    const date:string =this.convertDateFormat(year,month,day)
    this.service.getSummary(date).subscribe(
      data=>{
        this.summary_data = data;

      }
    )
  }
}
