import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donorregistration',
  templateUrl: './donorregistration.component.html',
  styleUrls: ['./donorregistration.component.css']
})
export class DonorregistrationComponent implements OnInit {

  
  registrationForm= new FormGroup({
    fullname:new FormControl(''),
    fathersname:new FormControl(''),
    age:new FormControl(''),
    address:new FormControl(''),
    bloodgroup:new FormControl('')
  })
  
  
  
  
  constructor(private apiservice:ApiService , private route:Router) { }

  ngOnInit() {
  }
  
  submit()
  {
    this.apiservice.donorRegistration(this.registrationForm.value).subscribe(
      res=>{
        console.log(res);
        this.route.navigate(['donorlist']);
      }
    );
  }


}
