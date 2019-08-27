import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksIndexComponent } from './books-index/books-index.component';
import { BooksNewComponent } from './books-new/books-new.component';
import { BooksShowComponent } from './books-show/books-show.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'books'},
  {path: 'books', component: BooksIndexComponent},
  {path: 'books/new', component: BooksNewComponent}, 
  {path: 'books/:id', component: BooksShowComponent},
  {path: '**', redirectTo: "books"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
