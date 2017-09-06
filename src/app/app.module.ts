import { NgModule }from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import { MaterialModule } from './material.module';

import { AppComponent }  from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FileListComponent }  from './components/file/file-list.component';
import { MovieDetailComponent }    from './components/file/movie-detail.component';
import { TvDetailComponent } from './components/file/tv-detail.component';

import { FileService } from './services/file.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule],
  declarations: [ AppComponent, ToolbarComponent, FileListComponent, MovieDetailComponent, TvDetailComponent],
  providers: [ appRoutingProviders, FileService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
