import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';

  items = ['nicolas', 'sergio', 'mateo'];

  power = 10;

  ngOnInit(): void {
  }
  addItem(): void {
    this.items.push('nuevo item');
  }
  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
