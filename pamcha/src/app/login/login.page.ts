import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
}from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Usuario: string= "";
  Password: string= "";


  formulariologin: FormGroup

  constructor(public fb: FormBuilder) { 
    this.formulariologin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }


  iniciarSesion()
  {
    console.log("Usuario + this.Usuario")
    console.log("Password + this.Password")
  }

}
