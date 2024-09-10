import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogPostComponent } from '../blog-post/blog-post.component';

import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'post', component: BlogPostComponent},
  ];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        BrowserModule, 
        HttpClientModule,
        MarkdownModule.forRoot({
          loader: HttpClient,
        }),
        RouterModule.forRoot(
          appRoutes, {enableTracing: true}  // <-- debugging purposes only
        ),
    ],
    exports: [
        HomeComponent
    ]
})
export class BlogPostModule { }