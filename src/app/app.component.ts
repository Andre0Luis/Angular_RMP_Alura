import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
   {
      url: '../assets/Images/6.jpg',
      description:'Rick and Morty La Vida?'
  },
  {
      url:'../assets/Images/1.jpg',
      description:'Rick and Morty Background White'
  },
  {
    url:'../assets/Images/4.jpg',
    description:'Rick and Morty Adventure'
  }
  ];

 
  
}
