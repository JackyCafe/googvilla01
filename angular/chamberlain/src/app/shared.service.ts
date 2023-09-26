import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://120.110.115.80/app/api";
  // APIUrl = "http://localhost/app/api";
  private closeClickSource = new BehaviorSubject<boolean>(false);
  closeClick$ = this.closeClickSource.asObservable();


  constructor(private http:HttpClient) { }

  getMajorList(){
    return this.http.get(this.APIUrl+"/major/");
  }

  getSubItem(val:any){
    return this.http.get(this.APIUrl+"/subitem/"+val);
  }

  getDetailItem(val:any){
    return this.http.get(this.APIUrl+"/detail/"+val);
  }

  // getWorkRecord(val:any){
  //   return this.http.get(this.APIUrl+"/workrecord/"+val);
  // }

  addWorkRecord(val:any,detailId:any){
    return this.http.post(this.APIUrl+'/workrecord/'+detailId+"/",val);
  }


  getWorkRecord(detailId:any,date:any){
    if (date==null)
      return this.http.get(this.APIUrl+"/workrecord/"+detailId);
    else
      return this.http.get(this.APIUrl+'/workrecord/'+date);
  }

  getSummary(date:any){
    return this.http.get(this.APIUrl+'/summary/'+date);

  }
  sendCloseClickSignal() {
    this.closeClickSource.next(true);
  }

}
