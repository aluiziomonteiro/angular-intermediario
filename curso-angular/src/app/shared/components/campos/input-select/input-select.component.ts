import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'dio-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent {

  @Input() formGroup: FormGroup;
  @Input() titulo: string;
  @Input() controlName: string;

  constructor(public validator: ValidarCamposService) { }
 
  get formControl(): AbstractControl{
    return this.formGroup.controls[this.controlName];
  }

}
