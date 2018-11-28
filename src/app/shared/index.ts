import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components } from './components';
import { directives } from './directives';
import { pipes } from './pipes';

@NgModule({
  declarations: [...pipes, ...components, ...directives],
  imports: [CommonModule],
  exports: [CommonModule, ...pipes, ...components, ...directives]
})
export class SharedModule {}

export * from './entities';
