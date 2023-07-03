import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-link',
  templateUrl: './my-link.component.html',
  styleUrls: ['./my-link.component.css']
})
export class MyLinkComponent implements OnInit {

  @Input() link: string = "";
  @Input() isFavorite: boolean = false;
  @Input() icon: string = "";

  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  ///this will send an event to the home component
  changeFavorite() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.link + " triggered the change event");
  }
}
