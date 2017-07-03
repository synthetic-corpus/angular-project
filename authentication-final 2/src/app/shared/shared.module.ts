/* This is a shared module. In most Angular project you will only have one of these.
  It exports directives and such to be used by other modules.
  Importan, an Angular declaration of a directive can only be on place per project. */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// The directive we wish to shared
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    // Here, and only here, let it be declared
    DropdownDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective
  ]
})
export class SharedModule {}
