import { Component } from '@angular/core';

import { ContactosPage } from '../contactos/contactos';
import { HomePage } from '../home/home';
import { CategoriaPage } from '../categoria/categoria';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactosPage;
  tab3Root = CategoriaPage;

  constructor() {

  }
}
