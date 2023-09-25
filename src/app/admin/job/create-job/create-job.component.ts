import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormsService} from "../../../services/forms/forms.service";
import {AdminService} from "../../../services/admin/admin.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent
{
  form: FormGroup;

  constructor(private formService: FormsService, private adminService: AdminService)
  {
    this.form = formService.getJobForm();
  }

  submitForm()
  {


    this.adminService.newJob(this.form.value).pipe(tap(
        response =>
        {
          console.log('Job créé avec succès :', response);
        }
      )
    )
      .subscribe({
        next: () =>
        {
          this.form.reset();
        },
        error: error =>
        {
          console.error('Erreur lors de la création du Job :', error);
        }
      });
  }

}
