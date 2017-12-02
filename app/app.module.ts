import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//Get the Http stuff for web services etc
import { HttpModule } from '@angular/http';

//If your using Ionic storage (like localStorage)
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

//Pages and tab frameworks etc
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { TestPage } from '../pages/test/test';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Data provider over Http
import { WeatherProvider } from '../providers/weather/weather';

@NgModule({
  declarations: [
    MyApp,
    //Lazy load the following as required on demand
    //AboutPage,
    //HomePage,
    //TabsPage,
    //SettingsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //Lazy load the following as required on demand
    //AboutPage,
    //HomePage,
    //TabsPage,
    //SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //setup the weather provide that pulls in via HTTP
    WeatherProvider
  ]
})
export class AppModule {}
