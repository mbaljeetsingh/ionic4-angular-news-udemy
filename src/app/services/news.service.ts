import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

import { tap } from 'rxjs/operators';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const params = new HttpParams().set('apiKey', apiKey);

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  loading;
  constructor(
    private http: HttpClient,
    public loadingController: LoadingController
  ) {}

  async showLoading() {
    this.loading = await this.loadingController.create({
      duration: 5000
    });

    return await this.loading.present();
  }

  getData(url) {
    this.showLoading();
    return this.http.get(`${apiUrl}/${url}`, { params }).pipe(
      tap(value => {
        this.loading.dismiss();
        console.log(value);
      })
    );
  }
}
