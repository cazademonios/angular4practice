import {Injectable} from "@angular/core";
import { FormGroup} from "@angular/forms";

@Injectable()
export class Formulario {
  submit: boolean = false;
  formGroup: FormGroup;

  checkField(field: string) {
    return this.submit && !this.formGroup.controls[field].dirty && !this.formGroup.controls[field].valid ||
      this.formGroup.controls[field].dirty &&
      !this.formGroup.controls[field].valid;
  }
  toSubmit(){
    this.submit = true;
  }
}
