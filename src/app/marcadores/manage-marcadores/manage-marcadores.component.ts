import { Component, OnInit, ViewChild } from '@angular/core';
import { Marcador } from '../../models/Marcador';
import { MarcadorService } from 'src/app/service/marcador.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-manage-marcadores',
  templateUrl: './manage-marcadores.component.html',
  styleUrls: ['./manage-marcadores.component.scss']
})
export class ManageMarcadoresComponent implements OnInit {

  marcadores: Array<Marcador>;
  displayedColumns: string[] = ['id', 'nombre', 'slug', 'pos']
  resultsLength = 0;
  pageSize = 20;

  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private marcadorService: MarcadorService) {
    this.marcadorService.all(0, this.pageSize).then(response => {
      this.marcadores = response.marcadores;
      this.resultsLength = response.total;
    });
  }

  ngOnInit() {
    

    this.paginator.page.subscribe(() => {
      this.marcadorService.all(this.paginator.pageIndex, this.pageSize).then(response => {
        this.marcadores = response.marcadores;
      });
    });
  }

}
