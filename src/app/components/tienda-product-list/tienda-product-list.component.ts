import { Component, OnInit } from '@angular/core';
import { TiendaService } from './../../service/tienda.service';

@Component({
  selector: 'app-tienda-product-list',
  templateUrl: './tienda-product-list.component.html',
  styleUrls: ['./tienda-product-list.component.scss']
})
export class TiendaProductListComponent implements OnInit {

  	constructor(private service:TiendaService) { }
 
	tiendas: any=[]

 
  ngOnInit() {

  	//this.service.list().subscribe(
	//	res=> this.tiendas = res,
	//	err=> console.error(err)
	//);

	this.tiendas = this.service.list();
  }

  removeProduct(){}
  pay(){}


}
