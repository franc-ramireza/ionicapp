import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Agrega la importación de NavController

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Usuario: string = "";
  Password: string = "";

  constructor(private navCtrl: NavController) {}

  ngOnInit() { 

  }

  ingresar() {
    if (this.Usuario.length >= 3 && this.Usuario.length <= 8 && /^\d{4}$/.test(this.Password)) {
      this.navCtrl.navigateForward('/home', {
        queryParams: {
          usuario: this.Usuario,
          contrasena: this.Password,
        }
      });
    } else {
      console.log('Datos no válidos');
    }
  }
}