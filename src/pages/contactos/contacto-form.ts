import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactoService } from '../../app/services/contacto.service';
import { ContactosPage } from './contactos';

@Component({
  selector: 'page-contacto-form',
  templateUrl: 'contacto-form.html'
})
export class ContactoFormPage {
  private contacto:any = {
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
    idCategoria: 1
  };
  private parametro:string;
  private encabezado:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    public contactoService: ContactoService
  ) {
    this.parametro = this.navParams.get('parametro');
    if(this.parametro != 'nuevo') {
      this.encabezado = "Detalle Contacto";
      this.contactoService.buscarContacto(this.parametro)
      .subscribe(contacto => this.contacto = contacto);
    } else {
      this.encabezado = "Nuevo Contacto";
    }
  }

  public guardar() {
    this.contactoService.nuevoContacto(this.contacto)
    .subscribe(res => {
      this.toast.create({
        message: res.mensaje,
        duration: 2000
      }).present();
      if(res.estado) {
        this.navCtrl.push(ContactosPage);
      } else {
        this.contacto.nombre = "";
        this.contacto.apellido = "";
        this.contacto.direccion = "";
        this.contacto.telefono = "";
        this.contacto.idCategoria = 0;
      }
    });
  }
}
