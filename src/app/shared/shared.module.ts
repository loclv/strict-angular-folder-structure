import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesComponent } from './component';

import { OnlyNumberDirective } from './directive';

@NgModule({
  declarations: [MessagesComponent],
  imports: [CommonModule],
  exports: [CommonModule, MessagesComponent, OnlyNumberDirective],
})
export class SharedModule {}
