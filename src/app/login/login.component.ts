import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email;
  public pwd;
  constructor() { }

  ngOnInit(): void {
  }
  validate() {
    if (this.email.value.trim =="" ||this.pwd.value.trim =="") 
    {
        alert("feild is empty");
        return false;
    } else if(this.pwd.value.length<=5){
        alert("password strong poor");
    }else if(this.pwd.value.length<=8){
        alert("password strong medium");
    }else if(this.pwd.value.length<=10){
        alert("password is strong ")
    }
    else {
     
    }
}

}
