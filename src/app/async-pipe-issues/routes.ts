import { Route } from '@angular/router';
import { MultipleResultsComponent, MultipleSubscriptionsComponent, SubjectsComponent } from './components';

export const routes: Route[] = [
  { path: 'multi', component: MultipleSubscriptionsComponent },
  { path: 'subject', component: SubjectsComponent },
  { path: 'results', component: MultipleResultsComponent }
];
