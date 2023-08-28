import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardListComponentModule } from './ui/card-list/card-list.component';
import { HeaderComponentModule } from '../shared/ui/header/header.component';

@Component({
  selector: 'app-home',
  template: `
    <header [headerTitle]="headerTitle">
      <ion-badge slot="end">22</ion-badge>
    </header>
    <ion-content>
      <card-list></card-list>
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeComponent {
  headerTitle = 'Home';
}

@NgModule({
  imports: [
    CardListComponentModule,
    HeaderComponentModule,
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: []
      },
    ]),
  ],
  declarations: [HomeComponent],
})
export class HomeComponentModule {}