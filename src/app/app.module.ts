import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TiendaProductListComponent } from './components/tienda-product-list/tienda-product-list.component';
import { CarritoComponent } from './page/carrito/carrito.component';
import { PagoComponent } from './page/pago/pago.component';
import { EnvioComponent } from './page/envio/envio.component';
import { RevisarComponent } from './page/revisar/revisar.component';
import { TiendaProductListImgComponent } from './components/tienda-product-list-img/tienda-product-list-img.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TiendaProductListComponent,
    CarritoComponent,
    PagoComponent,
    EnvioComponent,
    RevisarComponent,
    TiendaProductListImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
