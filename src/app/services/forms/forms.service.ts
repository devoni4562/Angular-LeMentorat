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

  getCategoryForm()
  {
    return this.fb.group(
      {
        libelle: ['', Validators.required]
      }
    );
  }

  getCaseStudyForm()
  {
    return this.fb.group(
      {
        link: ['', Validators.required],
        title: ['', Validators.required],
      }
    );
  }

  getJobForm()
  {
    return this.fb.group(
      {
        name: ['', Validators.required]
      }
    );
  }

  getLiveConferenceForm()
  {
    return this.fb.group(
      {
        link: ['', Validators.required]
      }
    );
  }

}
