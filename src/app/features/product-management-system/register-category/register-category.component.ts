import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

import {
  FormControl,
  FormRecord,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-category',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NzFormModule, NzInputModule],
  templateUrl: './register-category.component.html',
  styleUrl: './register-category.component.scss',
})
export class RegisterCategoryComponent implements OnInit {
  constructor(private fb: NonNullableFormBuilder) {}

  listOfControl: Array<{ id: number; controlInstance: string }> = [];
  validateForm!: FormRecord<FormControl<string>>; // Declaration only

  addField(e?: MouseEvent): void {
    e?.preventDefault();

    const id =
      this.listOfControl.length > 0
        ? this.listOfControl[this.listOfControl.length - 1].id + 1
        : 0;

    const control = {
      id,
      controlInstance: `passenger${id}`,
    };

    const index = this.listOfControl.push(control);
    console.log(this.listOfControl[this.listOfControl.length - 1]);

    this.validateForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      this.fb.control('', Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.record({}); // Initialize form here

    this.addField();
  }
}
