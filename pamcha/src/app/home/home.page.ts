import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string = "";
  apellido: string = "";
  educacion: string = "";
  fechaNacimiento: string = "";

  constructor(private toastController: ToastController) {}

  limpiar() {
    this.nombre = "";
    this.apellido = "";
    this.educacion = "";
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
        duration: 2000,
        position: "bottom",
      });
      await toast.present();
    }
  }
}