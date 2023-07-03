import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  // ** Input **
  @Input() displayDialog: boolean = false;

  // ** Output **
  @Output() responseEmitter = new EventEmitter<boolean>();
  @Output() onHideEmitter = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  handleHide() {
    this.onHideEmitter.emit();
  }

  respond(response: boolean) {
    this.responseEmitter.emit(response)
  }

}
