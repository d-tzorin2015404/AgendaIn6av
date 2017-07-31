import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { CategoriaService } from '../../app/services/categoria.service';
import { CategoriaPage } from './categoria';

@Component({
selector: 'page-categoria-form',
templateUrl: 'categoria-form.html'
})
export class CategoriaFormPage {
private categoria:any = {
  nombreCategoria: "",

};
private parametro:string;
private encabezado:string;

constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  public toast: ToastController,
  public categoriaService: CategoriaService
) {
  this.parametro = this.navParams.get('parametro');
  console.log(this.parametro);
  if(this.parametro != 'nuevo') {
    this.encabezado = "Detalle Categoria";
    this.categoriaService.buscarCategoria(this.parametro)
    .subscribe(categoria => this.categoria = categoria );
    setTimeout(()=>{console.log(this.categoria)},3000);
  } else {
    this.encabezado = "Nueva Categoria";
  }

}

public guardar() {
  this.categoriaService.nuevaCategoria(this.categoria)
  .subscribe(res => {
    this.toast.create({
      message: res.mensaje,
      duration: 2000
    }).present();
    if(res.estado) {
      this.navCtrl.push(CategoriaPage);
    } else {
      this.navCtrl.push(CategoriaPage);
    }
  });
}

 public editar = function(){
  this.categoriaService.updateCategoria(this.categoria).subscribe(res => {
    this.categoriaService.getCategoria().subscribe();
  });;
          this.navCtrl.push(CategoriaPage);
}
 public eliminar(){
  this.categoriaService.eliminarCategoria(this.categoria).subscribe(res => {
    this.categoriaService.getCategoria().subscribe();
  });;
          this.navCtrl.push(CategoriaPage);
}



}
