import {NgModule} from '@angular/core';
import {StartComponent} from './pages/start/start.component';
import {StartImports} from './start.imports';
import {StartProviders} from './start.providers';

@NgModule({
  declarations: [StartComponent],
  imports: [StartImports],
  providers: [StartProviders],
  entryComponents: [
    StartComponent
  ], exports: [
    StartComponent
  ]
})
export class StartModule {
}
