import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../app/services/categoria.service';
import { CategoriaFormPage } from './categoria-form';


@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {
  private categoria:any[] = [];

  constructor(public navCtrl: NavController,
    public categoriaService: CategoriaService) {
  }

  private inicializar(){
    this.categoriaService.getCategoria().subscribe( con => this.categoria = con)
  }

    public verForm(parametro) {
    this.navCtrl.push(CategoriaFormPage, {parametro});
  }


}
