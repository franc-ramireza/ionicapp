import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string = "";
  apellido: string = "";
  fechaNacimiento: string = "";
  datosForm: FormGroup;

  constructor(private toastController: ToastController,private formBuilder:FormBuilder) {
    this.datosForm=this.formBuilder.group({
      nivelEducativo:[' ',Validators.required]
    })
  } 

  limpiar() {
    this.nombre = "";
    this.apellido = "";
    this.fechaNacimiento = "";
  }

  async mostrar() {
    if (!this.nombre || !this.apellido) {
      const toast = await this.toastController.create({
        message: "Por favor, ingresa el nombre y el apellido",
        duration: 2000,
        position: "bottom",
      });
      await toast.present();
    } else {
      const toast = await this.toastController.create({
        message: `Nombre: ${this.nombre}, Apellido: ${this.apellido}`,
        buttons: ['OK'],
        duration: 2000,
        position: "bottom",
      });
      await toast.present();
    }
  }
}