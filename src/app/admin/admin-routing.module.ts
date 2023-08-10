import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {CreateArticleComponent} from "./article/create-article/create-article.component";
import {authGuard} from "../security/routingSecurity/auth.guard";
import {DeleteArticleComponent} from "./article/delete-article/delete-article.component";
import {UpdateArticleComponent} from "./article/update-article/update-article.component";

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        canActivateChild: [authGuard],
        children: [
          {path: 'create-article', component: CreateArticleComponent},
          {path: 'delete-article', component: DeleteArticleComponent},
          {path: 'update-article', component: UpdateArticleComponent},

        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule
{
}
