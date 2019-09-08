import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  URL = "";

  constructor(private http:HttpClient) { }

  list(){
	//return this.http.get(this.URL+'list');
	
	return [
		{
			id:"1",
			img:"https://pbs.twimg.com/profile_images/1046789269749030912/Qs4ZozCA_400x400.jpg",
			name:"",
			products:[
			  	{
			  		id:"1",
			  		img:"https://http2.mlstatic.com/maquillaje-liquido-timewise-mary-kay-acabado-luminoso-full-D_NQ_NP_729632-MLM31239309421_062019-O.webp",
			  		amount:"8",
			  		price:"50.00"
			  	},
			  	{
			  		id:"2",
			  		img:"https://http2.mlstatic.com/kit-mary-kay-base-matte-base-po-yellow-D_NQ_NP_746826-MLB31179775368_062019-Q.jpg",
			  		amount:"2",
			  		price:"80.00"
			  	}
	  		]
		},
		{
			id:"2",
			img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUuU9iwIIdI_ZqJ9nHTi10RyD9Dl4TmhXBq5Frf_EYnMGscaP-",
			name:"",
			products:[
			  	{
			  		id:"10",
			  		img:"https://franciscajoias.vteximg.com.br/arquivos/ids/166875-1000-1000/Anel-semi-joia-solitario-folheado-em-ouro-18k.jpg?v=636553266640870000",
			  		amount:"1",
			  		price:"2000.00"
			  	},
			  	{
			  		id:"11",
			  		img:"https://http2.mlstatic.com/conjunto-de-joias-luxo-rubi-vermelho-colar-brincos-ouro-18k-D_NQ_NP_876007-MLB25700893177_062017-F.jpg",
			  		amount:"1",
			  		price:"6500.00"
			  	}
	  		]
		}
	]

  }	
}
