import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IonApp,
  IonHeader,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [IonApp, IonHeader, IonRouterOutlet, IonToolbar, IonTitle],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
