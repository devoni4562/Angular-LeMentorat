import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormArray, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AdminService
{

  apiUrl = 'https://api-le-mentorat-fabdab54a40e.herokuapp.com/api/admin/';
  apiUrlLh = 'https://localhost:8000/api/admin/';

  constructor(private http: HttpClient)
  {
  }

  //------------------------ MEMBER ------------------------------//
  NewMember(form: FormGroup, croppedImage: any)
  {
    const formData: FormData = new FormData();
    let title = '';

    for (const controlName in form.controls)
    {
      if (controlName !== 'avatar')
      {
        const control = form.controls[controlName];
        formData.append(controlName, control.value);
        if (controlName === 'pseudo')
        {
          title = control.value;
        }
      } else if (controlName === "avatar")
      {
        console.log(croppedImage);
        if (croppedImage)
        {
          const mimeType = croppedImage.type;

          let fileExtension = '';
          if (mimeType === 'image/jpeg')
          {
            fileExtension = 'jpg';
          } else if (mimeType === 'image/png')
          {
            fileExtension = 'png';
          } else if (mimeType === 'image/gif')
          {
            fileExtension = 'gif';
          }

          const fileName = `${title}.${fileExtension}`;

          const imageFile = new File([croppedImage], fileName, {type: mimeType});

          if (imageFile)
          {
            formData.append('avatar', imageFile, imageFile.name);
          }
        }
      }
    }

    const imageinput = document.getElementById('avatarFile') as HTMLInputElement;
    const imageFile = imageinput?.files?.[0];
    console.log(imageFile);
    return this.http.post<any>(this.apiUrl + 'member/new', formData);
  }

  deleteMember(id: number)
  {
    return this.http.delete(this.apiUrl + 'member/delete/' + id);
  }

  //--------------------------- JOB --------------------------------//
  newJob(formData: FormGroup)
  {
    return this.http.post<any>(this.apiUrl + 'job/new', formData);
  }

  deleteJob(id: number)
  {
    return this.http.delete<any>(this.apiUrl + 'job/delete/' + id);
  }


  //------------------------- ARTICLE ------------------------------//

  newArticle(form: FormGroup)
  {
    const formData: FormData = new FormData();

    for (const controlName in form.controls)
    {
      if (controlName !== 'image' && controlName !== 'paragraphs')
      {
        const control = form.controls[controlName];
        const valueTesting = control.value?.toString();
        if (!valueTesting || !valueTesting.trim())
        {
          control.setValue(null);
        }
        formData.append(controlName, control.value);
      } else if (controlName === 'image')
      {
        const imageinput = document.getElementById('imgForm') as HTMLInputElement;
        const imageFile = imageinput?.files?.[0];
        if (imageFile)
        {
          formData.append('image', imageFile, imageFile.name);
        }
      } else if (controlName === 'paragraphs')
      {
        const paragraphsArray = form.get('paragraphs') as FormArray;
        const paragraphsData = paragraphsArray.controls.map((paragraphControl, index) =>
        {
          const paragraphImageInput = document.getElementById('paragraphImg' + index) as HTMLInputElement;
          const paragraphImageFile = paragraphImageInput?.files?.[0];

          const paragraphData = {
            paragraphTitle: paragraphControl.get('paragraphTitle')?.value,
            paragraphText: paragraphControl.get('paragraphText')?.value,
            paragraphLink: paragraphControl.get('paragraphLink')?.value,
            paragraphLinkText: paragraphControl.get('paragraphLinkText')?.value,
          };

          if (paragraphImageFile)
          {
            formData.append('imageParagraph' + index, paragraphImageFile, paragraphImageFile.name);
          }
          return paragraphData;
        });
        formData.append('paragraphs', JSON.stringify(paragraphsData));
      }
    }
    return this.http.post<any>(this.apiUrl + 'article/new', formData);
  }

  deleteArticle(id: number)
  {
    return this.http.delete(this.apiUrl + 'article/delete/' + id);
  }

  //------------------------ CATEGORY ------------------------------//
  newCategory(formData: any)
  {
    return this.http.post<any>(this.apiUrl + 'category/new', formData);
  }

  deleteCategory(id: number)
  {
    return this.http.delete(this.apiUrl + 'category/delete/' + id);
  }

  //----------------------- CASE STUDY ------------------------------//
  newCaseStudy(formData: any)
  {
    return this.http.post<any>(this.apiUrl + 'case_study/new', formData);
  }

  deleteCase(id: number)
  {
    return this.http.delete(this.apiUrl + 'case_study/delete/' + id);
  }

  //--------------------- LIVE CONFERENCE -----------------------------//
  updateLiveConferenceLink(formData: any)
  {
    return this.http.post<any>(this.apiUrl + 'live-conference/update', formData);
  }
}
