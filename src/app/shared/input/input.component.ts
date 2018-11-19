import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() errorMessage: string;
  @Input() label: string;

  input: NgModel;

  teste: string;

  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    if (this.model === undefined) {
      throw new Error('É necessário utilizar esse componente com um ngModel.');
    } else {
      this.input = this.model;
    }
  }

  hasSucess(): boolean {
    return this.input.valid && (this.input.touched || this.input.dirty);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.touched || this.input.dirty);
  }

}
