import {Component, Output, OnInit, ViewEncapsulation, trigger, state, style, animate, transition} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {BrowserXhr} from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { FileService } from '@services/file.service';
import { FileDetail, Person, Company } from '@models/file';


@Component({
  templateUrl: 'tv-detail.component.html',
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [
    trigger('poster', [
      state('*',   style({margin:  '0px 8px 0px 8px', opacity: '1'})),
      state('void', style({margin:  '0px 8px 0px -40px', opacity: '0'})),
      transition(':enter', [
        style({margin:  '0px 8px 0px -40px', opacity: '0'}),
        animate('450ms ease-in')
      ]),
      transition(':leave',animate('450ms ease-out')),
    ]),
    trigger('background', [
      state('*',   style({left: '-35px', opacity: '1'})),
      state('void', style({left: '-100px', opacity: '0'})),
      transition(':enter', [
        style({left: '10px', opacity: '0.1'}),
        animate('450ms ease-in')
      ]),
      transition(':leave',animate('450ms 100ms ease-out')),
    ]),
    trigger('genres', [
      state('*',   style({margin:  '0px auto', opacity: '1'})),
      state('void', style({margin:  '50px auto 0px', opacity: '0'})),
      transition(':enter', [
        style({margin:  '50px auto 0px', opacity: '0'}),
        animate('450ms ease-in')
      ]),
      transition(':leave',animate('450ms 150ms ease-out')),
    ]),
    trigger('overview', [
      state('void', style({margin:  '75px auto 0px', opacity: '0'})),
      state('*',   style({margin:  '20px auto', opacity: '1',})),
      transition(':enter', [
        style({margin:  '75px auto 0px', opacity: '0'}),
        animate('450ms 100ms ease-in')
      ]),
      transition(':leave',animate('450ms 100ms ease-out')),
    ]),
    trigger('crew', [
      state('*',   style({margin:  '0px auto', opacity: '1'})),
      state('void', style({margin:  '60px auto 0px', opacity: '0'})),
      transition(':enter', [
        style({margin:  '60px auto 0px', opacity: '0'}),
        animate('450ms 150ms ease-in')
      ]),
      transition(':leave',animate('450ms 150ms ease-out')),
    ]),
    trigger('download', [
      state('*',   style({margin:  '0px auto', opacity: '1'})),
      state('void', style({margin:  '80px auto 0px', opacity: '0'})),
      transition(':enter', [
        style({margin:  '80px auto 0px', opacity: '0'}),
        animate('450ms 250ms ease-in')
      ]),
      transition(':leave',animate('450ms ease-out')),
    ]),

    trigger('routeAnimation', [
      state('*', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in')
      ]),
      transition(':leave',[
        animate('300ms ease-out', style({opacity: 0}))
      ])
    ])
  ]
})


export class TvDetailComponent implements OnInit{
	file: FileDetail;
	crew: Person[];
	companies: Company[] = [];
	errorMessage: string;
  state:string;

	constructor(private route: ActivatedRoute,private router: Router,private _fileService: FileService) {}

	ngOnInit(){
    this.state = 'active';
    this._fileService.pageState.page = 'detail';
    this.route.params.subscribe(params => {
			let id = +params['id'];
			this.getFileById(id);
			//this.getCastByMovie(id);
		});
	}

	getFileById(id:number){
		this._fileService.getTvById(id)
		.subscribe(file =>  this.file = file,
               error =>  this.errorMessage = <any>error);
	}

	getCastByMovie(id:number){
		this._fileService.getCastByMovie(id)
		.subscribe(crew => this.crew = crew,
               error =>  this.errorMessage = <any>error);
	}


	getCompanies(id:number){
   		this._fileService.getCompanyById(id)
			.subscribe(comp =>this.companies.push(comp),
                 error =>  this.errorMessage = <any>error);
	}

  viewMovie(){
    console.log("Veo película");
  }

}
