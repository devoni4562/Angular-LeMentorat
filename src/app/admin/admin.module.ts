import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from "./admin/admin.component";
import {CreateArticleComponent} from "./article/create-article/create-article.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DeleteArticleComponent } from './article/delete-article/delete-article.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';


@NgModule({
  declarations: [
    AdminComponent,
    CreateArticleComponent,
    DeleteArticleComponent,
    UpdateArticleComponent,
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
