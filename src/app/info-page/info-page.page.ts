import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar
  ,IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent
  ,IonCardSubtitle, IonButtons
 } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackCircle, arrowForwardCircle } from 'ionicons/icons';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.page.html',
  styleUrls: ['./info-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule
    ,RouterLink, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent
    ,IonCardSubtitle, IonButtons
  ]
})
export class InfoPagePage implements OnInit {

  constructor() {
    addIcons({ arrowForwardCircle, arrowBackCircle });
   }

  ngOnInit() {
  }

}
