import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HelperModule } from '../helper/helper.module';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckStringLengthPipe } from './pipes/check-string-length.pipe';

const COMPONENTS = [
  HeaderComponent,
  SearchComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    CheckStringLengthPipe,
  ],
  exports: [
    ...COMPONENTS,
    CheckStringLengthPipe,
  ],
    imports: [
        CommonModule,
        RouterModule,
        HelperModule,
        HttpClientModule,
        ReactiveFormsModule,
    ]
})
export class SharedModule { }
