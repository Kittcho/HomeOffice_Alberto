import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input()
  libros: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
