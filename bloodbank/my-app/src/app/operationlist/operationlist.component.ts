import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operationlist',
  templateUrl: './operationlist.component.html',
  styleUrls: ['./operationlist.component.css']
})
export class OperationlistComponent implements OnInit {

  token:string; 
  donors:any;

  constructor(private apiService:ApiService ,private route: Router) { }

  ngOnInit() {
    this.token=this.apiService.getToken();
    this.apiService.operationList(this.token);
  }

  donor_registration()
  {
    this.route.navigate(['donorregistration']);
  }


   donor_list()
   {
     console.log("donor list");
     this.apiService.donor_list(this.token).subscribe(
       res => {
          this.donors=res.data;

          console.log(this.donors);
   console.log(res);
              
         this.route.navigate(['donorlist']);
  });
   }
}
