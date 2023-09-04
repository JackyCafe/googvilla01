import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chamberlain';
  private clickedTimes: string[] = [];
  startTime: string | undefined; // 追蹤開始時間
  endTime: string | undefined; // 追蹤結束時間

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
}
