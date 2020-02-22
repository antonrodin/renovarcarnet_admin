import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../models/Marcador';
import { MarcadorService } from 'src/app/service/marcador.service';

@Component({
  selector: 'app-manage-marcadores',
  templateUrl: './manage-marcadores.component.html',
  styleUrls: ['./manage-marcadores.component.scss']
})
export class ManageMarcadoresComponent implements OnInit {

  marcadores: Array<Marcador>;

  constructor(private marcadorService: MarcadorService) {
    
  }

  ngOnInit() {
    this.marcadorService.all().then(response => {
      console.log(response);
    });
  }

}
