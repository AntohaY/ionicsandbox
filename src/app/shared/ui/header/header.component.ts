import { Component, Input, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'header',
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-title> {{headerTitle ? headerTitle : 'Default header title'}} </ion-title>
                <ng-content></ng-content>
            </ion-toolbar>
        </ion-header>
    `
})

export class HeaderComponent {
    @Input() headerTitle?: string;
}

@NgModule({
    imports: [
        IonicModule,
    ],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers: [],
})
export class HeaderComponentModule { }
