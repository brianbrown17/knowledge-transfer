import { Component, OnInit } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { MarkdownService } from '../markdown.service';
import { marked } from 'marked';


// import { AppRoutingModule } from '../app-routing.module';
// import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [
    MarkdownModule,
  ],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  markdownContent: any = '';

  constructor(private markdownService: MarkdownService) { }

  ngOnInit(): void {
    const markdownUrl = 'https://raw.githubusercontent.com/brianbrown17/git-kt/main/README.md';
    this.markdownService.getMarkdown(markdownUrl).subscribe(
      content => {
        this.markdownContent = content;
      },
      error => {
        console.error('Error fetching Markdown', error);
      }
    );
    console.log(this.markdownContent);
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
