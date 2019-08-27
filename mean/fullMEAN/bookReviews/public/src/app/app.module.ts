import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksIndexComponent } from './books-index/books-index.component';
import { BooksNewComponent } from './books-new/books-new.component';
import { ReviewsNewComponent } from './reviews-new/reviews-new.component';
import { BooksShowComponent } from './books-show/books-show.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksIndexComponent,
    BooksNewComponent,
    ReviewsNewComponent,
    BooksShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
