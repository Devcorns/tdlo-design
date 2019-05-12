import { Component, OnInit } from '@angular/core';
import { FindcompanyService } from '../services/findcompany.service';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {
  i: number;
  results:any=[];
  addCompany: boolean = true;
  constructor(private findservice:FindcompanyService) { }

  ngOnInit() {
    
  }
  searchStart(inpVal:any){
    
    if (inpVal.target.value!=""){
        // console.log(inpVal.target.value);
        this.findservice.findCompany(inpVal.target.value).subscribe((data:FindcompanyService)=>{
          this.results = [];
          for( this.i=0; this.i<data.length; this.i++) {

            for(let key in data[this.i]) {
              if(data[this.i][key].indexOf(inpVal.target.value)!=-1) {
                this.results.push(data[this.i]);
              }
            }
          }
          console.log(this.results)
          if(!this.results.length){
            this.addCompany = false;
          }
          else{
            this.addCompany = true;
          }
            
          
        });
    }else{
      this.results = [];
      this.addCompany = true;
    }

  }
  companyClick(data){
    console.log(data.target)
  }


}
