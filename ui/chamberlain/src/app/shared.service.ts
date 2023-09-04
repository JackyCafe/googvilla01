import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://120.110.115.80:8000/app/api";
  // APIUrl = "http://localhost:8000/app/api";

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

  getWorkRecord(val:any){
    return this.http.get(this.APIUrl+"/workrecord/"+val);
  }

  addWorkRecord(val:any,detailId:any){
    return this.http.post(this.APIUrl+'/workrecord/'+detailId+"/",val);
  }

}
