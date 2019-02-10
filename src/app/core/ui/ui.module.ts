import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialColorService} from './services/material-color.service';
import {MaterialIconService} from './services/material-icon.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], providers: [
    MaterialColorService,
    MaterialIconService
  ]
})
export class UiModule {
}
