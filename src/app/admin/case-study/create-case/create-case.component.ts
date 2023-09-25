import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormsService} from "../../../services/forms/forms.service";
import {AdminService} from "../../../services/admin/admin.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css']
})
export class CreateCaseComponent
{
  form: FormGroup;

  constructor(private formService: FormsService, private adminService: AdminService)
  {
    this.form = formService.getCaseStudyForm();
  }

  submitForm()
  {


    this.adminService.newCaseStudy(this.form.value).pipe(tap(
        response =>
        {
          console.log('Étude de cas créé avec succès :', response);
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
          console.error('Erreur lors de la création de l\'Étude de cas :', error);
        }
      });
  }
}
