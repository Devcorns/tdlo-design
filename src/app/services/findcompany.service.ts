import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'; 



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    
  })
};
@Injectable({
  providedIn: 'root'
})

export class FindcompanyService {
 

  [x: string]: any;
  configUrl = './findcompany';
  constructor(private http: HttpClient) { 
    console.log("find service works");
  }

  findCompany(dataFromSearch:string){
    console.log(dataFromSearch);
    return this.http.post(this.configUrl, dataFromSearch, httpOptions)
    
  }

}
