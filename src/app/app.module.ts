import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactoFormPage } from '../pages/contactos/contacto-form';
import { ContactosPage } from '../pages/contactos/contactos';
import { CategoriaFormPage } from '../pages/categoria/categoria-form';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CategoriaPage } from '../pages/categoria/categoria';

import { AuthService } from './services/auth.service';
import { ContactoService } from './services/contacto.service';
import { CategoriaService } from './services/categoria.service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ContactosPage,
    ContactoFormPage,
    CategoriaFormPage,
    HomePage,
    TabsPage,
    LoginPage,
    CategoriaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactosPage,
    HomePage,
    ContactoFormPage,
    CategoriaFormPage,
    TabsPage,
    LoginPage,
    CategoriaPage,
  ],
  providers: [
    StatusBar,
    AuthService,
    ContactoService,
    SplashScreen,
    CategoriaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
