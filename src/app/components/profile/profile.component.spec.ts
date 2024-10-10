import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements AfterViewInit {

  ngAfterViewInit() {
    const carousel = document.getElementById('referenceCarousel');
    const indicators = document.querySelectorAll('.indicator-line');

    if (carousel) {
      // Update indicators on slide
      carousel.addEventListener('slide.bs.carousel', function (event: any) {
        indicators.forEach((indicator, index) => {
          indicator.classList.toggle('active', index === event.to);
        });
      });

      // Handle click on custom indicators
      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          const carouselElement = new (window as any).bootstrap.Carousel(carousel);
          carouselElement.to(index);
        });
      });
    }
  }
}
