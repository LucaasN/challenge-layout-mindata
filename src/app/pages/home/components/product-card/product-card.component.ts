import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { BadgeComponent } from '@components/badge/badge.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [BadgeComponent, NgFor, ButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  badgesData = [
    { icon: 'fa-solid fa-leaf', bgColor: '$green'},
    { icon: 'fa-solid fa-fire', bgColor: '#f8593b'},
  ];
}
