import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  originalComics: any[] = [];
  comics: any[] = [];
  searchTerm: string = '';

  constructor(private marvelApiService: MarvelApiService) { }

  ngOnInit(): void {
    this.loadComics();
  }

  loadComics(): void {
    this.marvelApiService.getComics().subscribe((data: any) => {
      this.originalComics = data.data.results;
      this.filterComics();
    });
  }

  searchComics(): void {
    this.filterComics();
  }

  filterComics(): void {
    if (!this.searchTerm.trim()) {
      this.comics = [...this.originalComics];
    } else {
      this.comics = this.originalComics.filter(comic =>
        comic.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
