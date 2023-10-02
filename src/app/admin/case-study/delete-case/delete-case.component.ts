import {Component} from '@angular/core';
import {AdminService} from "../../../services/admin/admin.service";
import {tap} from "rxjs";
import {CaseStudyService} from "../../../services/case-study/case-study.service";

@Component({
  selector: 'app-delete-case',
  templateUrl: './delete-case.component.html',
  styleUrls: ['./delete-case.component.css']
})
export class DeleteCaseComponent
{
  cases: any[] = [];

  constructor(private caseService: CaseStudyService, private adminService: AdminService)
  {
    caseService.getAllCaseStudyVideo().subscribe(
      (data: any[]) =>
      {
        this.cases = data;
      }
    );
  }

  deleteCase(id: number)
  {

    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cette Étude de cas ?');

    if (confirmation)
    {
      this.adminService.deleteCase(id).pipe(tap(
        response =>
        {
          const indexToRemove = this.cases.findIndex(item => item.id === id);

          if (indexToRemove !== -1)
          {
            this.cases.splice(indexToRemove, 1);
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
