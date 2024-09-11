import { Component, OnInit } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { MarkdownService } from '../markdown.service';
import { marked } from 'marked';
import { Observable, catchError } from 'rxjs'; // Import the Observable class and catchError function from the 'rxjs' library
import { CommonModule } from '@angular/common';


// import { AppRoutingModule } from '../app-routing.module';
// import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [
    MarkdownModule,
    CommonModule
  ],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  markdownContent: any = '';

  constructor(private markdownService: MarkdownService) { }

  ngOnInit(): void {
    const markdownUrl = 'https://raw.githubusercontent.com/brianbrown17/git-kt/main/README.md';

    console.log('Fetching Markdown from', markdownUrl);

    this.markdownService.getMarkdown(markdownUrl).pipe(
      catchError((error: any) => {
        console.error('Error fetching Markdown', error);
        return new Observable<any>(); // Return an empty observable to handle the error
      })
    ).subscribe(
      content => {
        console.log('content fetched', content);
        this.markdownContent = content;
      }
    );
  }
}

  // constructor(
  //   private route: ActivatedRoute
  // ){}

  // ngOnInit(): void {
  //   this.route.params.forEach((params: Params) => {
  //     if (params['id'] !== undefined) {
  //       const id = +params['id'];
  //       this.navigated = true;
  //       // this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  //     } else {
  //       this.navigated = false;
  //       // this.hero = new Hero();
  //     }
  //   });
  // }
