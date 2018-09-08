import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.page.html',
  styleUrls: ['./source.page.scss']
})
export class SourcePage implements OnInit {
  news;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.news = this.newsService.getData('everything?sources=abc-news');
  }
}
