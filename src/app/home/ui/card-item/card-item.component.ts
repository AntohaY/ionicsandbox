import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Card } from 'src/app/shared/interfaces/card';

@Component({
    selector: 'card-item',
    template: `
    
        <ion-card>
            <img *ngIf="cardItem.imageUrl" alt="Silhouette of mountains" src={{cardItem.imageUrl}} />
            <ion-card-header>
                <ion-card-title>{{cardItem.title}}</ion-card-title>
                <ion-card-subtitle *ngIf="cardItem.subtitle">{{cardItem.subtitle}}</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                {{cardItem.content}}
            </ion-card-content>
        </ion-card>
    `
})

export class CardItemComponent implements OnInit {

    @Input() cardItem!: Card;

    constructor() { }

    ngOnInit() { }
}

@NgModule({
    imports: [
      CommonModule,
      IonicModule,
    ],
    declarations: [CardItemComponent],
    exports: [CardItemComponent]
})
export class CardItemComponentModule {}