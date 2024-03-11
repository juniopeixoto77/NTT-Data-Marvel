import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from './services';
import { Comic } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  originalComics: Comic[] = [];
  comics: Comic[] = [];
  searchTerm = '';

  constructor(private marvelApiService: MarvelApiService) {}

  ngOnInit(): void {
    this.loadComics();
  }

  loadComics(): void {
    this.marvelApiService.getComics().subscribe(
      (data: any) => {
        this.originalComics = data.data.results;
        this.filterComics();
      },
      (error) => {
        console.error('Erro ao carregar os quadrinhos:', error);
      }
    );
  }

  searchComics(): void {
    this.filterComics();
  }

  filterComics(): void {
    if (!this.searchTerm.trim()) {
      this.comics = [...this.originalComics];
    } else {
      this.comics = this.originalComics.filter((comic) =>
        comic.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  redirectToComic(url: string): void {
    window.open(url, '_blank');
  }

  findDetailUrl(urls: any[]): string {
    const detailUrl = urls.find((url) => url.type === 'detail');
    return detailUrl ? detailUrl.url : '#';
  }
}