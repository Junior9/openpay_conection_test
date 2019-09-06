import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.scss']
})
export class EnvioComponent implements OnInit {

  constructor() { }

  user:{}

  ngOnInit() {

  	user:{
  		address:"Passeo de las Jarras 1554,Col, Independencia,Querétano, Querétano,C.P. 45632"
  	}
  }

}
