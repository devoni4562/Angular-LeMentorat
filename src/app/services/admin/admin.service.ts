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
  NewMember(form: FormGroup)
  {
    const formData: FormData = new FormData();

    for (const controlName in form.controls)
    {
      if (controlName !== 'avatar')
      {
        const control = form.controls[controlName];
        formData.append(controlName, control.value);
      } else if (controlName === "avatar")
      {
        const imageinput = document.getElementById('avatar') as HTMLInputElement;
        const imageFile = imageinput?.files?.[0];
        if (imageFile)
        {
          formData.append('avatar', imageFile, imageFile.name);
        }
      }
    }
    return this.http.post<any>(this.apiUrl + 'member/new', formData);
  }

  //------------------------ ARTICLE ------------------------------//

  createNewArticle(form: FormGroup)
  {
    const formData: FormData = new FormData();

    for (const controlName in form.controls)
    {
      if (controlName !== 'image' && controlName !== 'paragraphs')
      {
        const control = form.controls[controlName];
        const valueTesting = control.value.toString();
        if (!valueTesting.trim())
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
    return this.http.post<any>(this.apiUrlLh + 'article/new', formData);
  }

  //------------------------ CATEGORY ------------------------------//
  newCategory(formData: any)
  {
    console.log(formData);

    return this.http.post<any>(this.apiUrl + 'category/new', formData);
  }


}
