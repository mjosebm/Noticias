import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametrosSelected = new EventEmitter<any>()

  categorias:  any[] = 
  [
    {value:'general', nombre: 'General'},
    {value:'business', nombre: 'Negocios'},
    {value:'entertainment', nombre: 'Entretenimiento'},
    {value:'health', nombre: 'Salud'},
    {value:'science', nombre: 'Ciencia'},
    {value:'sports', nombre: 'Deportes'},
    {value:'technology', nombre: 'Tecnología'},
  ];

  paises : any[] =
  [
    {value:'ar', nombre: 'Argentina'},
    {value:'co', nombre: 'Colombia'},
    {value:'br', nombre: 'Brasil'},
    {value:'fr', nombre: 'Francia'},
    {value:'hu', nombre: 'Hungría'},
    {value:'mx', nombre: 'Mexico'},
    {value:'gb', nombre: 'Reino Unido'},
  ]

  categoriaSelected : string;
  paisSelected :string;
  constructor() { 
    this.categoriaSelected = 'general';
    this.paisSelected = 'co';


  }

  ngOnInit(): void {
  }

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSelected,
      pais: this.paisSelected
    }

    this.parametrosSelected.emit(PARAMETROS);
  }

}
