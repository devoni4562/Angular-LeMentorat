import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutUsComponent} from "./page/about-us/about-us.component";
import {HomeComponent} from "./page/home/home.component";
import {MentoratMethodComponent} from "./page/our-method/mentorat-method/mentorat-method.component";
import {WhoThatForComponent} from "./page/our-method/who-that-for/who-that-for.component";
import {BusinessOwnerCoffeeComponent} from "./page/free-content/business-owner-coffee/business-owner-coffee.component";
import {CaseStudyComponent} from "./page/free-content/case-study/case-study.component";
import {LiveConferenceComponent} from "./page/free-content/live-conference/live-conference.component";
import {BlogComponent} from "./page/blog/blog.component";
import {LoginComponent} from "./page/login/login.component";
import {DetailsArticleComponent} from "./page/blog/details-article/details-article.component";


const routes: Routes = [
  // home page
  {path: '', component: HomeComponent},
  //about-us section
  {path: 'about-us', component: AboutUsComponent},
  // our method section
  {path: 'mentorat_s-method', component: MentoratMethodComponent},
  {path: 'who_s-that-for', component: WhoThatForComponent},
  // free admin-content section
  {path: 'business-owner_s-coffee', component: BusinessOwnerCoffeeComponent},
  {path: 'case-study', component: CaseStudyComponent},
  {path: 'live-conference', component: LiveConferenceComponent},
  // blog section
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:title', component: DetailsArticleComponent},

  // login section
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule
{
}
