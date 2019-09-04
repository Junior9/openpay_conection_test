import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './page/carrito/carrito.component';
import { PagoComponent } from './page/pago/pago.component'; 
import { EnvioComponent } from './page/envio/envio.component'; 
import { RevisarComponent } from './page/revisar/revisar.component'; 


const routes: Routes = [
	{path:'home',component:CarritoComponent},
	{path:'envio',component:EnvioComponent},
	{path:'pago',component:PagoComponent},
	{path:'revisar',component:RevisarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }