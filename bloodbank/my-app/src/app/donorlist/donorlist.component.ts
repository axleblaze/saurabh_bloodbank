import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donorlist',
  templateUrl: './donorlist.component.html',
  styleUrls: ['./donorlist.component.css']
})
export class DonorlistComponent implements OnInit {

  token:string; 
  donors:any;

  constructor(private apiService:ApiService ,private route: Router) { }

  ngOnInit() {
    this.token=this.apiService.getToken();
    this.apiService.operationList(this.token);
    this.apiService.donor_list(this.token).subscribe(
      res => {
         this.donors=res.data;

         console.log(this.donors);
        // console.log(res);
              
         
  });
  }

  donor_registration()
  {

  }


  donor_list()
  {
    
    
  }
}
