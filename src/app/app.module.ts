import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HomeComponent } from './home/home.component';

import { MarkdownService } from './markdown.service';

@NgModule({
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    BlogPostComponent
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    MarkdownService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}