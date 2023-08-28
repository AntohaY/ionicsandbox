import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'tabs',
    template: ` 
    <ion-tabs>
        <ion-tab-bar slot="bottom">
            <ion-tab-button tab="home">
                <ion-icon name="play-circle"></ion-icon>
                Home
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
    `
})

export class TabsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

@NgModule({
    imports: [
      CommonModule,
      IonicModule,
    ],
    declarations: [TabsComponent],
})
export class TabsComponentModule {}