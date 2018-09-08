import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss']
})
export class FavoritesPage implements OnInit {
  sources = [];

  constructor(private storage: Storage) {}

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.storage.get('favorite').then(val => {
      if (val != null) {
        this.sources = JSON.parse(val);
      }
      console.log(this.sources);
    });
  }

  onRefresh() {
    this.getFavorites();
  }

  Unfavorite(source) {
    const index = this.sources.indexOf(source);
    this.sources.splice(index, 1);
    this.storage.set('favorite', JSON.stringify(this.sources));
  }
}
