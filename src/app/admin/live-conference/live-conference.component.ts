import {Component, OnInit} from '@angular/core';
import {LiveConferenceService} from "../../services/live-conference/live-conference.service";
import {AdminService} from "../../services/admin/admin.service";
import {FormsService} from "../../services/forms/forms.service";
import {FormGroup} from "@angular/forms";
import {tap} from "rxjs";

@Component({
  selector: 'app-live-conference',
  templateUrl: './live-conference.component.html',
  styleUrls: ['./live-conference.component.css']
})
export class LiveConferenceComponent implements OnInit
{

  link!: string;
  form!: FormGroup;

  constructor(private liveConferenceService: LiveConferenceService, private adminService: AdminService,
              formService: FormsService)
  {
    this.form = formService.getLiveConferenceForm();
  }

  ngOnInit()
  {
    this.liveConferenceService.getLink().subscribe(link =>
    {
      this.link = link;
    });
  }

  submitForm()
  {
    console.log(this.form.value);
    this.adminService.updateLiveConferenceLink(this.form.value).pipe(tap(
        response =>
        {
          console.log('Lien modifié avec succès :', response);
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
          console.error('Erreur lors de la modification du lien :', error);
        }
      });
  }

}
