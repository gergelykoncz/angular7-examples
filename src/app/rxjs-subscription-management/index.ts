import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';

import { components } from './components';
import { routes } from './routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [components],
  exports: [components]
})
export default class RxjSubscriptionManagementModule {}
