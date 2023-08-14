import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category/category.service";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/authenticator/auth.service";
import {AdminService} from "../../../services/admin/admin.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit
{

  categories: any[] = [];
  form: FormGroup;
  formParagraphs!: FormArray;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService,
              private categoryService: CategoryService, private authService: AuthService)
  {


    this.form = this.formBuilder.group({
      writterId: [this.authService.admin.id, Validators.required],
      category: ['', Validators.required],
      image: [null],
      video: [null],
      title: ['', Validators.required],
      summary: ['', Validators.required],
      paragraphs: this.formBuilder.array([])
    });
  }

  ngOnInit()
  {
    this.categoryService.getAllCategories().subscribe((categories) =>
    {
      this.categories = categories;
    });

    this.formParagraphs = this.form.get('paragraphs') as FormArray;
  }

  submitForm()
  {
    this.adminService.createNewArticle(this.form)
      .pipe(tap(
          response =>
          {
            console.log('Article créé avec succès :', response);
          }
        )
      )
      .subscribe({
        next: () =>
        {
          this.form.reset();
        },
        error: error =>
        {
          console.error('Erreur lors de la création de l\'article :', error);
        }
      });
  }

  addParagraph()
  {
    const newParagraph = this.formBuilder.group({
      paragraphTitle: ['', Validators.required],
      paragraphImage: [null],
      paragraphText: ['', Validators.required],
      paragraphLink: [null],
      paragraphLinkText: [null],
    });

    this.formParagraphs.push(newParagraph);
    console.log(this.formParagraphs);
    console.log(this.form);
  }
}
