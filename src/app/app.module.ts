import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import {Routes,RouterModule} from '@angular/router';
import { GridDataBindingComponent } from './grid-data-binding/grid-data-binding.component';
const links:Routes = [{path:"Grid",component:GridComponent},
                      {path:"GridDataBinding",component:GridDataBindingComponent}]
@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridDataBindingComponent
  ],
  imports: [
    BrowserModule,GridModule,RouterModule.forRoot(links)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
