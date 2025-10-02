import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { OpenLibraryService } from '../services/open-library.service';
import { IonContent, IonHeader, IonTitle, IonToolbar
  ,IonButtons, IonButton, IonIcon, IonCard, IonCardHeader
  ,IonCardTitle, IonCardContent
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.page.html',
  styleUrls: ['./work-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule
    ,IonButtons, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent
    ,RouterLink
  ]
})
export class WorkDetailsPage implements OnInit {
  work: any;

  constructor(
    private route: ActivatedRoute,
    private openLibrary: OpenLibraryService
  ) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.openLibrary.getWork(id).subscribe(res => {
        this.work = res;
      });
    }
  }

  getDescription(desc: any): string {
    if (!desc) return 'Sem descrição disponível';
    return typeof desc === 'string' ? desc : desc.value;
  }

}
