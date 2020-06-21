import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HelperModule } from '../helper/helper.module';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    HelperModule,
    NgxMasonryModule,
  ]
})
export class HomeModule { }
