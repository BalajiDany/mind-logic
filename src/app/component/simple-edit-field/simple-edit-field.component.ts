import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-edit-field',
  templateUrl: './simple-edit-field.component.html',
  styleUrls: ['./simple-edit-field.component.css']
})
export class SimpleEditFieldComponent implements OnInit {

  @Input() label: string;
  @Input() placeholder: string = '';
  @Input() fieldName: string;
  @Input() fieldValue: string = '';
  @Input() fieldType: 'text' | 'password' | 'email' = 'text';
  @Input() icon: string;
  @Input() enableCopy: boolean = false;

  @Output() onAccept = new EventEmitter<object>();
  @Output() onReject = new EventEmitter<object>();
  @Output() onCopy = new EventEmitter<object>();

  enableEdit: boolean = false;

  private previousValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  onEditIconClick(): void {
    this.enableEdit = true;
    this.previousValue = this.fieldValue;
  }

  onCloseClick(): void {
    this.enableEdit = false;
    this.fieldValue = this.previousValue;
    this.onReject.emit(this.getSnapshot());
  }

  onAcceptClick(): void {
    const isChanged = this.previousValue !== this.fieldValue;
    const snapshot = this.getSnapshot();

    this.enableEdit = false;
    this.previousValue = this.fieldValue;
    this.onAccept.emit({ ...snapshot, isChanged });
  }

  private getSnapshot() {
    return {
      fieldName: this.fieldName,
      fieldValue: this.fieldValue,
    }
  }
}
