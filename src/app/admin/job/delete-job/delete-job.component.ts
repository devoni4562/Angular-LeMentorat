import {Component} from '@angular/core';
import {AdminService} from "../../../services/admin/admin.service";
import {tap} from "rxjs";
import {JobService} from "../../../services/job/job.service";

@Component({
  selector: 'app-delete-job',
  templateUrl: './delete-job.component.html',
  styleUrls: ['./delete-job.component.css']
})
export class DeleteJobComponent
{
  jobs: any[] = [];

  constructor(private jobService: JobService, private adminService: AdminService)
  {
    jobService.getAllJobs().subscribe(
      (data: any[]) =>
      {
        this.jobs = data;
      }
    );
  }

  deleteJob(id: number)
  {

    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer ce job ?');

    if (confirmation)
    {
      this.adminService.deleteJob(id).pipe(tap(
        response =>
        {
          const indexToRemove = this.jobs.findIndex(item => item.id === id);

          if (indexToRemove !== -1)
          {
            this.jobs.splice(indexToRemove, 1);
          }
        }
      ))
        .subscribe(
          {
            error: error =>
            {
              console.error(error);
            }
          }
        );
    }

  }
}
