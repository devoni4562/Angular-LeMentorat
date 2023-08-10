import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {CreateArticleComponent} from "./article/create-article/create-article.component";
import {authGuard} from "../security/routingSecurity/auth.guard";
import {DeleteArticleComponent} from "./article/delete-article/delete-article.component";
import {UpdateArticleComponent} from "./article/update-article/update-article.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CreateMemberComponent} from "./member/create-member/create-member.component";
import {UpdateMemberComponent} from "./member/update-member/update-member.component";
import {DeleteMemberComponent} from "./member/delete-member/delete-member.component";
import {CreateCategoryComponent} from "./category/create-category/create-category.component";
import {UpdateCategoryComponent} from "./category/update-category/update-category.component";
import {DeleteCategoryComponent} from "./category/delete-category/delete-category.component";

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'article',
        canActivateChild: [authGuard],
        children: [
          {path: 'create', component: CreateArticleComponent},
          {path: 'delete', component: DeleteArticleComponent},
          {path: 'update', component: UpdateArticleComponent},
        ]
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'member',
        canActivateChild: [authGuard],
        children: [
          {path: 'create', component: CreateMemberComponent},
          {path: 'update', component: UpdateMemberComponent},
          {path: 'delete', component: DeleteMemberComponent}
        ]
      },
      {
        path: 'category',
        canActivateChild: [authGuard],
        children: [
          {path: 'create', component: CreateCategoryComponent},
          {path: 'update', component: UpdateCategoryComponent},
          {path: 'delete', component: DeleteCategoryComponent}
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
