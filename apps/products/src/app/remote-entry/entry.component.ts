import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'shop-module-federation-products-entry',
  template: `<shop-module-federation-nx-welcome></shop-module-federation-nx-welcome>`,
})
export class RemoteEntryComponent {}
