import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit() {
  }

  token: string;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  submit(form: NgForm) {
    
      this.apiService.login(this.loginForm.value).subscribe(
        result => {
          console.log(result);
          this.token = result.access_token;
          
          this.apiService.setToken(this.token);
          this.route.navigate(['operationlist']);
          
            // console.log("else");
            // this.loginForm.reset();
          
        }
      );
  }

}