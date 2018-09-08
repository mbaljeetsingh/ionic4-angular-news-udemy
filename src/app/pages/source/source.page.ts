import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-source',
  templateUrl: './source.page.html',
  styleUrls: ['./source.page.scss']
})
export class SourcePage implements OnInit {
  news;
  id;
  constructor(
    private newsService: NewsService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activedRoute.snapshot.paramMap.get('id');
    this.news = this.newsService.getData(`everything?sources=${this.id}`);
  }
}
