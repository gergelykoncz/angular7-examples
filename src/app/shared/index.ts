import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components } from './components';
import { pipes } from './pipes';

@NgModule({
  declarations: [...pipes, ...components],
  imports: [CommonModule],
  exports: [CommonModule, ...pipes, ...components]
})
export class SharedModule {}

export * from './entities';
