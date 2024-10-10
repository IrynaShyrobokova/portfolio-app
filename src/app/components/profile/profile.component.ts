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
      carousel.addEventListener('slide.bs.carousel', function (event: any) {
        // Remove active class from all indicators
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Add active class to the current indicator
        indicators[event.to].classList.add('active');
      });

      // Event listeners for clicking indicators
      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          const carouselElement = new (window as any).bootstrap.Carousel(carousel);
          carouselElement.to(index); 
        });
      });
    }
  }
}
