import { NgModule, CUSTOM_ELEMENTS_SCHEMA }from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';


import { AppComponent }  from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FileListComponent }  from './components/file/file-list.component';
import { MovieDetailComponent }    from './components/file/movie-detail.component';
import { TvDetailComponent } from './components/file/tv-detail.component';

import { FileService } from './services/file.service';

import { MdToolbarModule, MdIconModule, MdButtonModule, MdMenuModule, MdProgressSpinnerModule, MdTooltipModule} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdProgressSpinnerModule,
    MdTooltipModule
	],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdProgressSpinnerModule,
    MdTooltipModule
  ],
  declarations: [ AppComponent, ToolbarComponent,FileListComponent,MovieDetailComponent, TvDetailComponent],
	providers: [ appRoutingProviders, FileService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [ AppComponent ]
})

export class AppModule { }