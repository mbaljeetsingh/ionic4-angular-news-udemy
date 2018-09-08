import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss']
})
export class SourcesPage implements OnInit {
  sources;
  fakeSources = new Array(20);
  term = '';
  constructor(
    private newsService: NewsService,
    private storage: Storage,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // this.sources = this.newsService.getData('sources');
    this.newsService.getData('sources').subscribe(sources => {
      this.sources = sources['sources'];
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Added To Favorites.',
      duration: 2000
    });
    toast.present();
  }

  favorite(source) {
    console.log(source);
    this.storage.get('favorite').then(val => {
      let items = [];
      if (val != null) {
        items = JSON.parse(val);
      }
      items.push(source);
      this.storage.set('favorite', JSON.stringify(items));
      this.presentToast();
    });
  }
}
