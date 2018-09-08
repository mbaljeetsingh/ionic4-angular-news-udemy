import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { TopNewsPageModule } from '../top-news/top-news.module';
import { HeadlinesPageModule } from '../headlines/headlines.module';
import { SourcesPageModule } from '../sources/sources.module';
import { FavoritesPageModule } from '../favorites/favorites.module';
import { SettingsPageModule } from '../settings/settings.module';
import { SourcePageModule } from '../source/source.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    TopNewsPageModule,
    HeadlinesPageModule,
    SourcesPageModule,
    SourcePageModule,
    FavoritesPageModule,
    SettingsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
