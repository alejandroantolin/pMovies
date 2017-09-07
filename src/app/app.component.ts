import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import '@app/rxjs-operators';

import {FileService} from '@services/file.service';

@Component({
	templateUrl: 'app.component.html',
  selector: 'app-root'
})

export class AppComponent implements OnInit{
	private errorMessage:string;
	version:string;
	name:string;
	pagestate:any;

	/**
	 * pageState es un objeto ofrecido por el servicio compartido,
	 * irá cambiando dependiendo de la página en la que estemos y añadirá una clase (mirar template) para un comportamiento diferente.
	 */
	constructor(private _fileService:FileService, private http: Http){
		this.pagestate = this._fileService.pageState;
	}

/**
 * Parámetros deben ser cogidos a través de una pre-instancia en gulp.
 * (Mirar parámetros de Electron para el control de versiones).
 */
	ngOnInit(){
		this.version = "1.0.1";
    this.name = "pMovies";
	}
}
