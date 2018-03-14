import { FormGroup } from '@angular/forms';

export abstract class Form {
  abstract form: FormGroup;
  abstract formErrors;
  abstract validationMessages;

  protected abstract submitForm();

  onSubmit() {
    if (this.form.valid) {
      this.submitForm();
    } else {
      this.onValueChanged();
    }
  }

  protected createForm() {
    this.form.valueChanges
      .subscribe(() => this.onValueChanged());
  }

  protected onValueChanged() {
    if (!this.form) { return; }
    const form = this.form;

    Object.keys(this.formErrors).map(field => {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.touched && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        Object.keys(control.errors).map(key => {
          this.formErrors[field] = this.formErrors[field] || messages[key];
        });
      }
    });
  }
}
