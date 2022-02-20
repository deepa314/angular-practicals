import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {  routeslist } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMaterialModule } from './angular-material/all-material-module';
import { NgContainerModule } from './ng-container/ng-container.module';
import { WhenUseHigherOrderOpeartorsModule } from './when-use-higher-order-opeartors/when-use-higher-order-opeartors.module';
import { CallbackHellModule } from './callback-hell/callback-hell.module';
import { UnsubObsModule } from './unsub-obs/unsub-obs.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DesignPatternsModule } from './design-patterns/design-patterns.module';
import { BranchingModule } from './branching/branching.module';
import { DependencyInjectionModule } from './dependency-injection/dependency-injection.module';
import { MastersModule } from './masters/masters.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { SearchTypeAheadModule } from './search-type-ahead/search-type-ahead.module';
import { RouterModule, Routes } from '@angular/router';
import { WhenUseHigherOrderOpeartorsComponent } from './when-use-higher-order-opeartors/when-use-higher-order-opeartors/when-use-higher-order-opeartors.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeslist),
    BrowserAnimationsModule,
    HttpClientModule,
    AllMaterialModule,
    NgContainerModule,
    WhenUseHigherOrderOpeartorsModule,
    CallbackHellModule,
    UnsubObsModule,
    DashboardModule,
    DesignPatternsModule,
    BranchingModule,
    DependencyInjectionModule,
    MastersModule,
    RxjsModule,
    SearchTypeAheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

