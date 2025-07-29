 import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../service/movie';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  $movie: Observable<Movie | null> = of(null);
  @ViewChild('video', { static: true }) videoElement!: ElementRef<HTMLDivElement>;

  constructor(private mvService: MovieService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const { url } = this.route.snapshot.queryParams as any;
    if (url){
      this.$movie = this.mvService.getMovie(url);
      this.$movie.subscribe(movie => {
        if (movie && movie.other_links && movie.other_links.length > 0) {
          const videoLink = movie.other_links.forEach(link => {
            this.setVideo(link.url);
          });
        } else {
          console.error('No torrent available for this movie');
        }
      });
    }
  }
  createIframe(url: string): HTMLIFrameElement {
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.frameBorder = '0';
    iframe.marginWidth = '0';
    iframe.marginHeight = '0';
    iframe.allowFullscreen = true;
    return iframe;
  }
  setVideo(url: string): void {
    // const videoUrl = 'https://hglink.to/e' + url.substring(url.indexOf('.com/') + 4);
    this.videoElement.nativeElement.appendChild(this.createIframe(url));




    // <IFRAME SRC="https://hglink.to/e/4y27ls6lacv9" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>

    // this.mvService.getURL(url1)
    // .subscribe(url => {
    //   const div: HTMLDivElement = document.createElement('div');
    //   div.innerHTML = url;
    //   const iframe: string = div.querySelector('textarea#iet')?.textContent || '';
    //   this.videoElement.nativeElement.innerHTML = iframe;
    //   // const list = ['#adbd','#advert1', '#advert2', '#advert3'];
    //   // list.forEach(selector => {
    //   //   const element = div.querySelector(selector);
    //   //   if (element) {
    //   //     element.remove();
    //   //   }
    //   // });
    // });
  }

}
