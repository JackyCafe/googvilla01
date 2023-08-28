import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://120.110.115.80:8000/app/api";


  constructor(private http:HttpClient) { }

  getMajorList(){
    return this.http.get(this.APIUrl+"/major");
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

}
