import { Route } from '@angular/router';
import { AsyncComponent, ManualComponent, TakeUntilComponent } from './components';

export const routes: Route[] = [
  { path: 'async', component: AsyncComponent },
  { path: 'manual', component: ManualComponent },
  { path: 'takeUntil', component: TakeUntilComponent }
];
