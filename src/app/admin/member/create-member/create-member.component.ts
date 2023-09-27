import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormsService} from "../../../services/forms/forms.service";
import {AdminService} from "../../../services/admin/admin.service";
import {JobService} from "../../../services/job/job.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ImageCroppedEvent} from "ngx-image-cropper";
import Compressor from "compressorjs";

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit
{
  form!: FormGroup;
  jobs: any[] = [];
  isPasswordVisible = false;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showModal: boolean = false;

  constructor(private formService: FormsService, private adminService: AdminService, private jobService: JobService,
              private sanitizer: DomSanitizer)
  {
  }

  ngOnInit()
  {
    this.form = this.formService.getMemberForm();
    this.jobService.getAllJobs().subscribe((data: any[]) =>
    {
      this.jobs = data;
    });
  }

  togglePasswordInput(isChecked: any): void
  {
    this.isPasswordVisible = isChecked.target.checked;

    if (this.isPasswordVisible)
    {
      this.form.addControl('password', new FormControl('', Validators.required));
      this.form.addControl('isAdmin', new FormControl(true, Validators.required));
    }

    if (!this.isPasswordVisible)
    {
      // Réinitialise la valeur du champ de mot de passe si nécessaire
      this.form.removeControl('password');
      this.form.removeControl('isAdmin');
    }
  }

  submitForm()
  {
    const compressionPromise = new Promise((resolve, reject) =>
    {
      new Compressor(this.croppedImage, {
        quality: 0.9,
        success(result)
        {
          resolve(result);
        },
        error(err)
        {
          console.log(err.message);
          reject(err);
        }
      });
    });

    (async () =>
    {
      try
      {
        const compressedImage = await compressionPromise;
        console.log(compressedImage);

        this.form.get('avatar')!.setValue(compressedImage);

        this.adminService.NewMember(this.form, compressedImage).subscribe(response =>
        {
          console.log('Membre ajouté', response);
          this.form.reset();
        }, error =>
        {
          console.log(error);
        });
      } catch (error)
      {
        console.error('Une erreur s\'est produite :', error);
      }
    })();
  }

  fileChangeEvent(event: any): void
  {
    this.showModal = true;
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent)
  {
    if (event.blob != null)
    {
      this.croppedImage = event.blob;
    }
    // event.blob can be used to upload the cropped image
  }

  imageLoaded()
  {
    // show cropper
  }

  cropperReady()
  {
    // cropper ready
  }

  loadImageFailed()
  {
    // show message
  }

}
