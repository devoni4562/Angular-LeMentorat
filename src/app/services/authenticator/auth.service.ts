import {EventEmitter, Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService
{

  token: string | null;
  admin: any;
  isLoggedIn: boolean = false;
  responseMessage: string = '';
  apiUrl = 'https://localhost:8000/api/login';
  public loginSucces: EventEmitter<void> = new EventEmitter<void>();
  private inactivityTimeout: any;

  constructor(private cookieService: CookieService, private http: HttpClient, private router: Router)
  {
    this.token = this.cookieService.get('jwt_token');
  }

  isAuthenticated(): boolean
  {
    return this.token !== null;
  }

  public login(formData: any): void
  {

    this.http.post<any>(this.apiUrl, formData)
      .pipe(
        tap(response =>
        {
          this.token = response.token;
          this.responseMessage = response.message;
          this.admin = response.admin;

          this.cookieService.set('jwt_token', response.token);
        })
      )
      .subscribe({
        next: () =>
        {
          this.resetInactivityTimeout();
          this.isLoggedIn = true;
          this.loginSucces.emit();
        },
        error: error =>
        {
          console.error(error);
        }
      });
  }

  logout()
  {
    this.isLoggedIn = false;
    this.cookieService.delete('jwt_token');
    this.router.navigate(['/login']);
  }

  resetInactivityTimeout(): void
  {
    clearTimeout(this.inactivityTimeout);
    this.startInactivityTimeout();
  }

  private startInactivityTimeout()
  {
    this.inactivityTimeout = setTimeout(() =>
    {
      this.logout();
    }, 15 * 60 * 1000);
  }
}
