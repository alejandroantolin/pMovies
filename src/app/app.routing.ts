import {Routes, RouterModule }   from '@angular/router';
import {FileListComponent} from './components/file/file-list.component';
import {MovieDetailComponent} from './components/file/movie-detail.component';
import {TvDetailComponent} from './components/file/tv-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'files',
    pathMatch: 'full'
  },
  { path: 'files',  component: FileListComponent},
  { path: 'files/:search',  component: FileListComponent},
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'tv/:id', component: TvDetailComponent },
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);

