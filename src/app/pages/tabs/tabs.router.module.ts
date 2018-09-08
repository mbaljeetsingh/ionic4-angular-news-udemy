import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { TopNewsPage } from '../top-news/top-news.page';
import { HeadlinesPage } from '../headlines/headlines.page';
import { SourcesPage } from '../sources/sources.page';
import { FavoritesPage } from '../favorites/favorites.page';
import { SettingsPage } from '../settings/settings.page';
import { SourcePage } from '../source/source.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(top-news:top-news)',
        pathMatch: 'full'
      },
      {
        path: 'top-news',
        outlet: 'top-news',
        component: TopNewsPage
      },
      {
        path: 'headlines',
        outlet: 'headlines',
        component: HeadlinesPage
      },
      {
        path: 'sources',
        outlet: 'sources',
        component: SourcesPage
      },
      {
        path: 'sources/:id',
        outlet: 'sources',
        component: SourcePage
      },
      {
        path: 'favorites',
        outlet: 'favorites',
        component: FavoritesPage
      },
      {
        path: 'settings',
        outlet: 'settings',
        component: SettingsPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(top-news:top-news)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
