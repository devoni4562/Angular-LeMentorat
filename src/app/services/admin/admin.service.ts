import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AdminService
{

  apiUrl = 'https://api-le-mentorat-fabdab54a40e.herokuapp.com/api/admin/';
  apiUrlLocalhost = 'https://localhost:8000/api/admin/';

  constructor(private http: HttpClient)
  {
  }

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

}
