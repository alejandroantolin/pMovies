// Importar el núcleo de Angular
import {Component,OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FileService} from '@services/file.service';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'toolbar',
    templateUrl: 'toolbar.component.html'
})


// Clase del componente donde iran los datos y funcionalidades
export class ToolbarComponent implements OnInit {
	search:string;
	pageState:any;

	constructor(private _fileService:FileService,private router: Router, private route: ActivatedRoute){}

	ngOnInit(){
		this.pageState = this._fileService.pageState;
	}


	handleChange(){
		this.router.navigate(['/files', (this.search === 'undefined' || !this.search ? "" : this.search)]);
	}

	/**
	 * Sync se encargará de sincronizar de nuevo el listado de archivos. (falta implementar).
	 */
	sync(){
		console.log("sincronizo");
	}

}
