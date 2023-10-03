import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormsService} from "../../../services/forms/forms.service";
import {AdminService} from "../../../services/admin/admin.service";
import {JobService} from "../../../services/job/job.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent
{
  showModal: boolean = false;

  jobSelected: any;
  indexOfJobSelected!: number;

  form!: FormGroup;
  jobs: any[] = [];

  constructor(formService: FormsService, private adminService: AdminService, private jobService: JobService)
  {
    this.jobService.getAllJobs().subscribe((data: []) =>
    {
      this.jobs = data;
    });
    this.form = formService.getJobForm();
  }

  submitForm()
  {
    this.adminService.updateJob(this.form.value, this.jobSelected.id).pipe(tap(
        response =>
        {
          console.log('Job modifié avec succès :', response);
          console.log(this.indexOfJobSelected);
          this.jobs[this.indexOfJobSelected] = response;
        }
      )
    )
      .subscribe({
        next: () =>
        {
          this.form.reset();
          this.showModal = false;
        },
        error: error =>
        {
          console.error('Erreur lors de la modification du Job :', error);
        }
      });
  }

  ModifyThisJob(id: number, index: number)
  {
    this.jobService.getOneJob(id).subscribe(jobSelected =>
    {
      this.jobSelected = jobSelected;
      console.log(jobSelected);
    });
    this.indexOfJobSelected = index;
    this.showModal = true;
  }
}
