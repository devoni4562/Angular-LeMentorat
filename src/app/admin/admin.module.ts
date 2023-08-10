import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from "./admin/admin.component";
import {CreateArticleComponent} from "./article/create-article/create-article.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DeleteArticleComponent} from './article/delete-article/delete-article.component';
import {UpdateArticleComponent} from './article/update-article/update-article.component';
import {CreateMemberComponent} from './member/create-member/create-member.component';
import {UpdateMemberComponent} from './member/update-member/update-member.component';
import {DeleteMemberComponent} from './member/delete-member/delete-member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';


@NgModule({
    declarations: [
        AdminComponent,
        CreateArticleComponent,
        DeleteArticleComponent,
        UpdateArticleComponent,
        CreateMemberComponent,
        UpdateMemberComponent,
        DeleteMemberComponent,
        DashboardComponent,
        CreateCategoryComponent,
        UpdateCategoryComponent,
        DeleteCategoryComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AdminModule
{
}
