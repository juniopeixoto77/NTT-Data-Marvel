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
  currentPage = 1;
  itemsPerPage = 20;

  constructor(private marvelApiService: MarvelApiService) {}

  ngOnInit(): void {
    this.loadComics();
  }

  loadComics(): void {
    const offset = (this.currentPage - 1) * this.itemsPerPage;
    this.marvelApiService.getComics(offset).subscribe(
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
    if (this.currentPage === 1) {
      this.filterComics();
    } else {
      this.currentPage = 1;
      this.loadComics();
    }
  }

  filterComics(): void {
    if (!this.searchTerm.trim()) {
      this.comics = this.originalComics.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      );
    } else {
      this.comics = this.originalComics
        .filter((comic) =>
          comic.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
        .slice(
          (this.currentPage - 1) * this.itemsPerPage,
          this.currentPage * this.itemsPerPage
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

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.loadComics();
  }

  getPageNumbers(): number[] {
    const totalPages = Math.ceil(
      this.originalComics.length / this.itemsPerPage
    );
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}
