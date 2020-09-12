import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleEditFieldComponent } from './simple-edit-field/simple-edit-field.component';
import { CustomSvgComponent } from './custom-svg/custom-svg.component';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CustomToasterComponent } from './custom-toaster/custom-toaster.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SimpleEditFieldComponent, CustomSvgComponent, CustomToasterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClipboardModule,
    NgbToastModule,
  ],
  exports: [
    SimpleEditFieldComponent,
    CustomToasterComponent,
    CustomSvgComponent,
  ]
})
export class BaseModule { }
