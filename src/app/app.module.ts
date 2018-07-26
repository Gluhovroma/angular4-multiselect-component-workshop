import { NgModule, ApplicationRef, enableProdMode } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { FilterListPipe } from './pipes/filterList.pipe';
import { FragmentationData } from './services/fragmentationData';
import { ApiService } from './shared';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { 
  MultiSelectComponent,
  SingleSelectComponentItem,
  MultiSelectComponentItem,
} from './components';

import { GlobalState } from './global.state';
enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,


  ],
  declarations: [
    FilterListPipe,
    AppComponent,
    MultiSelectComponent,
    SingleSelectComponentItem,
    MultiSelectComponentItem,
  ],
  providers: [
    Title,
    ApiService,
    GlobalState,
    FragmentationData,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  // hmrOnInit(store) {
  
  // }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
