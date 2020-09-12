import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-edit-field',
  templateUrl: './simple-edit-field.component.html',
  styleUrls: ['./simple-edit-field.component.css']
})
export class SimpleEditFieldComponent implements OnInit {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() fieldName: string;
  @Input() fieldValue: string = '';
  @Input() fieldType: 'text' | 'password' | 'email' = 'text';

  @Output() onAccept = new EventEmitter<string>();
  @Output() onReject = new EventEmitter<void>();
  @Output() onCopy = new EventEmitter<string>();

  enableEdit: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onEditIconClick(): void {
    this.enableEdit = true;
  }

  onCloseClick(): void {
    this.enableEdit = false;
    this.onReject.emit();
  }

  onAcceptClick(): void {
    this.enableEdit = false;
    this.onAccept.emit('');
    alert(this.fieldValue)
  }
}
