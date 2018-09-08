import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  constructor(
    private storage: Storage,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cleared Favorites.',
      duration: 2000
    });
    toast.present();
  }

  onClearFavorites() {
    this.storage.remove('favorite');
    this.presentToast();
  }
}
