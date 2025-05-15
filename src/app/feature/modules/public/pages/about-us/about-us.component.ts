import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  isLoading = true
  constructor() {
    // Simulate loading delay (you can replace with actual API logic)
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }
  products = [
    { name: 'Product 1', price: 100, description: 'Description of Product 1' },
    { name: 'Product 2', price: 200, description: 'Description of Product 2' },
    { name: 'Product 3', price: 300, description: 'Description of Product 3' },
    { name: 'Product 4', price: 400, description: 'Description of Product 4' },
    { name: 'Product 5', price: 500, description: 'Description of Product 5' }
  ]
}
