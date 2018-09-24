import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, RequestMethod ,Headers  } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token: string;

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
    })
     };

  constructor(private http:HttpClient) { }

  login(loginCredentials)
  {   
    return this.http.post('http://localhost:8000/api/auth/login', loginCredentials);
  }

  getToken(){
    return this.token;
  }

  setToken(token)
  {
    this.token=token;
  }

  operationList(token)
  {
    var headerOptions=new Headers({'content-type':'application/json','Authorization':'Bearer '+token,'Accept':'application/json'});
    var requestOptions=new RequestOptions( {method:RequestMethod.Post , headers:headerOptions});
    return this.http.post('http://localhost:8000/api/auth/me',"");
  }

  donor_list(token)
  {
   // var headerOptions=new Headers({'content-type':'application/json','Authorization':'Bearer '+token,'Accept':'application/json'});
   // var requestOptions=new RequestOptions( {method:RequestMethod.Get , headers:headerOptions});
    return this.http.get('http://localhost:8000/api/registrations', this.httpOptions);
  }
   
  donorRegistration(inputData)
  {
    var headerOptions=new Headers({'content-type':'application/json'});
    var requestOptions=new RequestOptions( {method:RequestMethod.Post , headers:headerOptions});
    return this.http.post('http://localhost:8000/api/registration',inputData);
  }
}
