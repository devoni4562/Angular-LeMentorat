import {Component} from '@angular/core';
import {FormsService} from "../../../services/forms/forms.service";
import {FormGroup} from "@angular/forms";
import {AdminService} from "../../../services/admin/admin.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent
{

  form: FormGroup;

  constructor(private formService: FormsService, private adminService: AdminService)
  {
    this.form = formService.getCategoryForm();
  }

  submitForm()
  {


    this.adminService.newCategory(this.form.value).pipe(tap(
        response =>
        {
          console.log('Catégorie créé avec succès :', response);
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
          console.error('Erreur lors de la création de la catégorie :', error);
        }
      });
  }

}
