import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormsService} from "../../services/forms/forms.service";
import {AdminService} from "../../services/admin/admin.service";
import {tap} from "rxjs";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-business-coffee',
  templateUrl: './business-coffee.component.html',
  styleUrls: ['./business-coffee.component.css']
})
export class BusinessCoffeeComponent
{

  form: FormGroup;

  constructor(private formService: FormsService, private adminService: AdminService, private datePipe: DatePipe)
  {
    this.form = formService.getCoffeeOwnerForm();
  }

  submitForm()
  {
    const dateControl = this.form.get('date');
    const selectedDate: Date = dateControl?.value;
    const formattedDate = this.datePipe.transform(selectedDate, 'dd-MM-yyyy');

    this.form.get('date')?.setValue(formattedDate);

    this.adminService.updateBusinessCoffeeInfos(this.form.value).pipe(tap(
        response =>
        {
          console.log('modification des informations café entrepreneur réussie:', response);
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
          console.error('Erreur lors de la modification des informations café entrepreneur :', error);
        }
      });
  }
}
