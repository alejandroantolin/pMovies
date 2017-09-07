import {Routes, RouterModule }   from '@angular/router';
import {FileListComponent} from '@components/home/file-list/file-list.component';
import {MovieDetailComponent} from '@components/home/file-detail/movie-detail/movie-detail.component';
import {TvDetailComponent} from '@components/home/file-detail/serie-detail/tv-detail.component';

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

