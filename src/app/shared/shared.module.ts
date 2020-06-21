import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperModule } from '../helper/helper.module';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HelperModule,
  ]
})
export class SharedModule { }
