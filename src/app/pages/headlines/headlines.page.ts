import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss']
})
export class HeadlinesPage implements OnInit {
  news;
  categories = [
    'World',
    'India',
    'Business',
    'Technology',
    'Entertainment',
    'Sports',
    'Science'
  ];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getCategoryData(this.categories[0]);
  }

  onGetCategoryData(category) {
    console.log(category.toLowerCase());
    this.getCategoryData(category);
  }

  getCategoryData(category) {
    this.news = this.newsService.getData(
      `everything?q=${category.toLowerCase()}`
    );
  }
}
