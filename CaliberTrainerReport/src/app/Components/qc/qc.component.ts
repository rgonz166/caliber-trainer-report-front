import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qc',
  templateUrl: './qc.component.html',
  styleUrls: ['./qc.component.css']
})
export class QCComponent implements OnInit {
  selectedValue: string;
  constructor() { }

  ngOnInit(): void {
    this.selectedValue = 'all';
  }

}