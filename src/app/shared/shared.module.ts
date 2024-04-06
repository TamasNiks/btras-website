import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SvgIconComponent } from './svg-icon/svg-icon.component';

@NgModule({
  declarations: [
    SvgIconComponent
  ],
  exports: [
    SvgIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class SharedModule { }