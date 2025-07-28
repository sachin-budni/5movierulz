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
      this.setVideo();
    }

    this.mvService.getURL()
    .subscribe(url => {
      const div: HTMLDivElement = document.createElement('div');
      div.innerHTML = url;
      const iframe: string = div.querySelector('textarea#iet')?.textContent || '';
      this.videoElement.nativeElement.innerHTML = iframe;
      // const list = ['#adbd','#advert1', '#advert2', '#advert3'];
      // list.forEach(selector => {
      //   const element = div.querySelector(selector);
      //   if (element) {
      //     element.remove();
      //   }
      // });
    });
  }
  setVideo(): void {
    // this.$movie.subscribe(movie => {
    //   if (movie && movie.other_links && movie.other_links.length > 0) {
    //     const videoHTML = `<video controls style="width: 100%; height: 100%;">
    //       <source src="${movie.torrent[0].magnet}" type="video/mp4">
    //       Your browser does not support the video tag.
    //     </video>`;
    //     this.videoElement.nativeElement.innerHTML = videoHTML;
    //   } else {
    //     this.videoElement.nativeElement.innerHTML = '<p>No video available</p>';
    //   }
    // });
  }

}
