import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/authenticator/auth.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  admins: any[] = [];
  form: FormGroup;
  authService: AuthService;

  constructor(private formBuilder: FormBuilder, authService: AuthService, private http: HttpClient,
              private router: Router)
  {
    this.authService = authService;

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit()
  {
    this.authService.loginSucces.subscribe(() =>
    {
      this.form.reset();
      this.router.navigate(['/']);
    });
  }

  submitForm()
  {
    if (this.form.valid)
    {
      const formData = this.form.value;
      this.authService.login(formData);
      if (this.authService.responseMessage.length > 0)
      {
        console.log(this.authService.responseMessage);
        this.form.reset();
      }

    }
  }

  getAdmin()
  {
    this.http.get<any[]>('https://localhost:8000/api/admin/get_all_admin').subscribe(
      (data: any[]) =>
      {
        this.admins = data;
      }
    );
  }
}
