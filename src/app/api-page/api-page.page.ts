import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton,
 IonIcon, IonButtons, IonItem, IonLabel, IonInput, IonList,
 IonThumbnail
 } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackCircle, arrowForwardCircle } from 'ionicons/icons';
import { OpenLibraryService } from '../services/open-library.service';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.page.html',
  styleUrls: ['./api-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, 
  CommonModule, FormsModule, RouterLink, IonButton, IonIcon, 
  IonButtons, IonItem, IonLabel, IonInput, IonList,IonThumbnail,

  ]
})
export class ApiPagePage implements OnInit {

  query = '';
  books: any[] = [];
  authors: { [key:string]: any } = {};

  constructor(private openLibrary: OpenLibraryService) {
    addIcons({ arrowForwardCircle, arrowBackCircle });
   }

   searchBooks() {
    this.openLibrary.searchBooks(this.query).subscribe(res => {
      this.books = res.docs;

      this.books.forEach(book => {
        const authorKey = book.author_key?.[0];
        if (authorKey && !this.authors[authorKey]) {
          this.openLibrary.getAuthor(authorKey).subscribe (author => {
            this.authors[authorKey] = author;
          })
        }
      })
    });
   }
   
   getAuthorBio(authorKey: string): string {
    const author=this.authors[authorKey];
    if (!author) return 'Carregando...';
    const bio = author.bio;
    return typeof bio === 'string' ? bio : bio?.value || 'Sem biografia disponível'
   }
   getCover(coverId:number): string {
    return this.openLibrary.getCoverUrl(coverId, 'L')
   }
  ngOnInit() {
  }

}
