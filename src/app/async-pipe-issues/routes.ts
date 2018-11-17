import { Route } from '@angular/router';
import {
  ColdObservableComponent,
  HotObservableComponent,
  MultipleResultsComponent,
  MultipleSubscriptionsComponent,
  SubjectsComponent
} from './components';

export const routes: Route[] = [
  { path: 'cold', component: ColdObservableComponent },
  { path: 'hot', component: HotObservableComponent },
  { path: 'multi', component: MultipleSubscriptionsComponent },
  { path: 'subject', component: SubjectsComponent },
  { path: 'results', component: MultipleResultsComponent }
];
