import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

//import { TabsPage } from './tabs';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: string = 'HomePage';
  tab2Root: string = 'AboutPage';
  tab3Root: string = 'SettingsPage';

  constructor() {

  }
}