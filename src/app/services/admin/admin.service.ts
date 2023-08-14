import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormArray, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AdminService
{

  apiUrl = 'https://api-le-mentorat-fabdab54a40e.herokuapp.com/api/admin/';
  
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

  createNewArticle(form: any)
  {
    const articleFormData: FormData = new FormData();

    articleFormData.append('category', form.get('category').value);
    articleFormData.append('writterId', form.get('writterId').value);
    articleFormData.append('title', form.get('title').value);
    articleFormData.append('video', form.get('video').value);
    articleFormData.append('summary', form.get('summary').value);

    const imageinput = document.getElementById('imgForm') as HTMLInputElement;
    const imageFile = imageinput?.files?.[0];
    if (imageFile)
    {
      articleFormData.append('image', imageFile, imageFile.name);
    }

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
        articleFormData.append('imageParagraph' + index, paragraphImageFile, paragraphImageFile.name);
      }

      return paragraphData;
    });

    articleFormData.append('paragraphs', JSON.stringify(paragraphsData));

    return this.http.post<any>(this.apiUrl + 'article/new', articleFormData);
  }

  //------------------------ CATEGORY ------------------------------//
  newCategory(formData: any)
  {
    console.log(formData);

    return this.http.post<any>(this.apiUrl + 'category/new', formData);
  }


}
