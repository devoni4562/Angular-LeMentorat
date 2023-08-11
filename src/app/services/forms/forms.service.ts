import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormsService
{

  constructor(private fb: FormBuilder)
  {
  }

  getMemberForm()
  {
    return this.fb.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        pseudo: ['', Validators.required],
        email: ['', Validators.required],
        jobId: ['', Validators.required],
        description: ['', Validators.required],
        avatar: [null, Validators.required],
      }
    );
  }

}
