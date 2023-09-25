import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/authenticator/auth.service";
import {Router} from "@angular/router";
import {ScreenWidthService} from "../../services/screen-width/screen-width.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  form: FormGroup;
  authService: AuthService;
  isLargeScreen: boolean = true;

  constructor(private formBuilder: FormBuilder, authService: AuthService,
              private screenWidthService: ScreenWidthService,
              private router: Router)
  {
    this.authService = authService;

    screenWidthService.isLargeScreen$.subscribe(isLargeScreen =>
    {
      this.isLargeScreen = isLargeScreen;
    });

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
      this.router.navigate(['/admin/dashboard']);
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


}
