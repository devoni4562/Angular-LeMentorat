import {Component} from '@angular/core';
import {CategoryService} from "../../../services/category/category.service";
import {AdminService} from "../../../services/admin/admin.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent
{
  categories: any[] = [];

  constructor(private categoryService: CategoryService, private adminService: AdminService)
  {
    categoryService.getAllCategories().subscribe(
      (data: any[]) =>
      {
        this.categories = data;
      }
    );
  }

  deleteCategory(id: number)
  {

    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?');

    if (confirmation)
    {
      this.adminService.deleteCategory(id).pipe(tap(
        response =>
        {
          const indexToRemove = this.categories.findIndex(item => item.id === id);

          if (indexToRemove !== -1)
          {
            this.categories.splice(indexToRemove, 1);
          }
        }
      ))
        .subscribe(
          {
            error: error =>
            {
              console.error(error);
            }
          }
        );
    }

  }

}
