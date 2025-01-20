import { Component } from '@angular/core';
import { UserListCardComponent } from './components/user-list-card/user-list-card.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UserListCardComponent,
    ProfileCardComponent,
    ProductCardComponent,
    ItemCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
