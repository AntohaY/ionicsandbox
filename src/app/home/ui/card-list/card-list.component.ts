import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, IonicModule } from '@ionic/angular';
import { Card } from 'src/app/shared/interfaces/card';
import { CardItemComponentModule } from '../card-item/card-item.component';

@Component({
    selector: 'card-list',
    template: `
        <ion-list>
            <ion-item *ngFor="let card of cardList; let index">
                <card-item [cardItem]="card"></card-item>
            </ion-item>
        </ion-list>
        <ion-infinite-scroll (ionInfinite)="onIonInfinite($event)">
            <ion-infinite-scroll-content></ion-infinite-scroll-content>
        </ion-infinite-scroll>
    `
})

export class CardListComponent implements OnInit {
    constructor() { }

    cardList: Array<Card> = [];

    ngOnInit() {
        this.generateItems();
    }

    private generateItems() {
        const count = this.cardList.length + 1;
        for (let i = 0; i < 50; i++) {
            this.cardList.push({
                title: `Item ${count + i}`,
                subtitle: `Item subtitle ${count + i}`,
                imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png',
                content: `Item content ${count + i}`,
            });
        }
    }

    onIonInfinite(ev: Event) {
        this.generateItems();

        setTimeout(() => {
            (ev as InfiniteScrollCustomEvent).target.complete();
        }, 500);
    }
}

@NgModule({
    imports: [
      CommonModule,
      IonicModule,
      CardItemComponentModule,
    ],
    declarations: [CardListComponent],
    exports: [CardListComponent]
})
export class CardListComponentModule {}