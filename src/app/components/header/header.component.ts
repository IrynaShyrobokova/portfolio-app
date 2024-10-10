import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  // Variables for dynamic content
  title: string = 'Iryna Shyrobokova';
  roles: string = 'IT Projects | Software Development | Teams Leadership | Large-Scale Application Development | .NET Development | Legacy Code Refactoring Expert | Software Estimation';

  constructor() {}

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  // Event handler for the "Hire Me" button
  onHireMeClick(): void {
    alert('You clicked Hire Me!');
  }

  // Event handler for the "Download CV" button
  onDownloadCvClick(): void {
    alert('Downloading CV...');
    // Add logic to download a file if needed
  }
}
