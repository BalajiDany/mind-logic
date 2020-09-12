import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleEditFieldComponent } from './simple-edit-field/simple-edit-field.component';
import { CustomSvgComponent } from './custom-svg/custom-svg.component';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard'

@NgModule({
  declarations: [SimpleEditFieldComponent, CustomSvgComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClipboardModule,
  ],
  exports: [
    SimpleEditFieldComponent,
    CustomSvgComponent,
  ]
})
export class BaseModule { }
