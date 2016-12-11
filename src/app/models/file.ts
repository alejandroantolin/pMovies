export interface File{
	name: string;
	original_name: string;
	poster_path: string;
	adult: boolean;
	overview: string;
	release_date:string;
	original_title: string;
	genre_ids: number[];
	id: number;
	media_type: string;
	original_language: string;
	title: string;
	backdrop_path: string;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
}

export interface FileDetail{
	adult:boolean;
	backdrop_path: string;
	genres:Genres[];
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	production_companies: Company[];
}

export interface Genres{
	id:number;
	name:string;
}

export interface Person{
	cast_id: number;
	department: string;
	id: number;
	job: string;
	name: string;
	profile_path: string;
}

export interface Company{
	description: any;
	headquarters:string;
	homepage: string;
	id: number
	logo_path:string;
	name: string;
	parent_company: any;
}

