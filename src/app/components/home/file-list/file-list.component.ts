import {Component, Output, OnInit, ViewEncapsulation, trigger, state, style, animate, transition} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {File} from '@models/file';
import {FileService} from '@services/file.service';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
	templateUrl: 'file-list.component.html',
	host: {
		'[@routeAnimation]': 'true'
	},
	animations: [
		trigger('routeAnimation', [
			state('*', style({opacity: 1})),
			transition(':enter', [
				style({opacity: 0}),
				animate('600ms ease-in')
			]),
			transition(':leave',[
				animate('600ms ease-out', style({opacity: 0}))
			])
		])
  	]
})


export class FileListComponent implements OnInit{
	loading:boolean = false;
	files:File[];
	public ErrorMessage: string;
	errorMessage:string;
	param:string;
	search:string;

	constructor(private _fileService:FileService, private router: Router, private route: ActivatedRoute){}

	ngOnInit(){
		this._fileService.pageState.page = 'list';
		this.route.params.subscribe((params:Params) => {
			this.search = params['search'];
			if(this.search === 'undefined' || !this.search || this.search === ""){
				console.log("No hay parametros de búsqueda, muestro todas las peliculas");
				if(!this._fileService.getFilesData()){
					console.log("No hay peliculas cargadas");
					this.loading = true;
					this.getFiles();
				}else{
					this.files = this._fileService.getFilesData();
				}
			}else{
				if(!this._fileService.getFilesData()){
					console.log("No hay peliculas cargadas, debo cargarlas y luego filtrar");
					this.loading = true;
					this.getFiles();
				}else{
					this.filterFiles();
				}
			}
		});
	}

	getFiles(){
		this._fileService.getFiles().subscribe(
		   	res => {
		   		this._fileService.setFilesData(res);
		   		this.files = this._fileService.getFilesData();
				if(this.search) this.filterFiles();
		   		this.loading = false;
		   	},
            error =>  this.errorMessage = <any>error)
	}

	onSelect(file: File) {
		if(file.media_type === 'movie')
			this.router.navigate(['/movie', file.id]);
		else if(file.media_type === 'tv')
			this.router.navigate(['/tv', file.id]);
	}


	filterFiles(){
		this.files = this._fileService.getFilesData();
		this.files = this.files.filter((element) => {
			if(element.media_type==='movie'){
				return (element.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 || element.original_title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
			}else if(element.media_type==='tv'){
				return (element.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 || element.original_name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
			}

		});
	}

}
