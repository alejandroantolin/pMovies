import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";

import {File, FileDetail, Person, Company} from '@models/file';



@Injectable()
export class FileService{

	private _files:File[];
	public pageState = {
		page: null,
		player: false
	}

	private apiUrl:string = 'http://85.251.95.179:8000/api';

	constructor(private _http: Http){}

	/**
	 * getter y setter de Files, los archivos se mantendrán como una variable privada en el servicio,
	 * si queremos acceder a los datos usaremos estas funciones.
	 */
	getFilesData():File[]{
		return this._files;
	}

	setFilesData(files:File[]){
		this._files = files;
	}

	getFiles(): Observable<File[]>{
		return this._http.get(`${this.apiUrl}/files`)
			.map(res =>  res.json().items);
	}

	getMovieById(id:number): Observable<FileDetail>{
		return this._http.get(`${this.apiUrl}/movie/${id}`).map(res => res.json());
	}

	getTvById(id:number): Observable<FileDetail>{
		return this._http.get(`${this.apiUrl}/tv/${id}`).map(res => res.json());
	}

	getCastByMovie(id:number):Observable<Person[]>{
		return this._http.get(`${this.apiUrl}/cast/${id}`).map(res => res.json().crew);
	}

	getCompanyById(id:number):Observable<Company>{
		return this._http.get(`${this.apiUrl}/company/${id}`).map(res => res.json());
	}


}
