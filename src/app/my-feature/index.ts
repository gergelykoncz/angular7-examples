import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';

import { components } from './components';
import { services } from './services';
import { routes } from './routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...components],
  providers: [...services]
})
export class MyFeatureModule {}
