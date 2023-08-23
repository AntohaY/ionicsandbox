import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'navigation-tabs',
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

export class NavigationTabsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

@NgModule({
    imports: [
      CommonModule,
      IonicModule,
    ],
    declarations: [NavigationTabsComponent],
  })
  export class NavigationTabsComponentModule {}