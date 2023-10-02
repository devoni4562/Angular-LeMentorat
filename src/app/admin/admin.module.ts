import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from "./admin/admin.component";
import {CreateArticleComponent} from "./article/create-article/create-article.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DeleteArticleComponent} from './article/delete-article/delete-article.component';
import {UpdateArticleComponent} from './article/update-article/update-article.component';
import {CreateMemberComponent} from './member/create-member/create-member.component';
import {UpdateMemberComponent} from './member/update-member/update-member.component';
import {DeleteMemberComponent} from './member/delete-member/delete-member.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CreateCategoryComponent} from './category/create-category/create-category.component';
import {UpdateCategoryComponent} from './category/update-category/update-category.component';
import {DeleteCategoryComponent} from './category/delete-category/delete-category.component';
import {CreateCaseComponent} from './case-study/create-case/create-case.component';
import {UpdateCaseComponent} from './case-study/update-case/update-case.component';
import {DeleteCaseComponent} from './case-study/delete-case/delete-case.component';
import {CreateJobComponent} from './job/create-job/create-job.component';
import {UpdateJobComponent} from './job/update-job/update-job.component';
import {DeleteJobComponent} from './job/delete-job/delete-job.component';
import {ImageCropperModule} from "ngx-image-cropper";
import { LiveConferenceComponent } from './live-conference/live-conference.component';
import { BusinessCoffeeComponent } from './business-coffee/business-coffee.component';


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
    CreateCaseComponent,
    UpdateCaseComponent,
    DeleteCaseComponent,
    CreateJobComponent,
    UpdateJobComponent,
    DeleteJobComponent,
    LiveConferenceComponent,
    BusinessCoffeeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    NgOptimizedImage
  ]
})
export class AdminModule
{
}
