import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes-pipe',
  templateUrl: './testes-pipe.component.html',
  styleUrls: ['./testes-pipe.component.scss']
})
export class TestesPipeComponent implements OnInit {

  evento: any = {
    dataEvento: new Date(2021, 9, 21),
    precoEvento: 35.00,
    limitadosEvento: 0.8465,

  };

  constructor() { }

  ngOnInit(): void {
  }

}
