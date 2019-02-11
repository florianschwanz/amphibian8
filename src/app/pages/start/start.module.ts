import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartComponent} from './pages/start/start.component';
import {StartRoutingModule} from './start-routing.module';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    StartRoutingModule
  ], entryComponents: [
    StartComponent
  ], exports: [
    StartComponent
  ]
})
export class StartModule {
}
