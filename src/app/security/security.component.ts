import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtServiceService } from '../jwt-service.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest:any={
    "userName":"fahrul",
    "password":"password"
  }

  response:any;

  constructor(private service:JwtServiceService) { }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest){
    let resp=this.service.generateToken(authRequest);
    resp.subscribe(data=>this.accessApi(data));
      }


      public accessApi(token){
    let resp=this.service.welcome(token);
    resp.subscribe(data=>this.response=data);
      }

}
