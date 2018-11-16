import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { AsyncComponent, ManualComponent, TakeUntilComponent } from './components';
import { routes } from './routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [AsyncComponent, ManualComponent, TakeUntilComponent],
  exports: [AsyncComponent, ManualComponent, TakeUntilComponent]
})
export default class RxjSubscriptionManagementModule {}
