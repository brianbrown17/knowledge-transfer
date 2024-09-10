import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'post/:id', component: BlogPostComponent},
  {path: 'post', component: BlogPostComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }