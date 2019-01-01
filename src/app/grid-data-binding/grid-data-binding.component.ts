import { Component, OnInit } from '@angular/core';
import { customers } from './customers';
@Component({
  selector: 'app-grid-data-binding',
  templateUrl: './grid-data-binding.component.html',
  styleUrls: ['./grid-data-binding.component.css']
})
export class GridDataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public gridData: any[] = customers;
}
