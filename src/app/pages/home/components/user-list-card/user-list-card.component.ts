import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '@models/user.model';
import { UserSummaryComponent } from './components/user-summary/user-summary.component';

@Component({
  selector: 'app-user-list-card',
  standalone: true,
  imports: [UserSummaryComponent, NgFor],
  templateUrl: './user-list-card.component.html',
  styleUrl: './user-list-card.component.scss',
})
export class UserListCardComponent {
  users: User[] = [
    {
      id: 1,
      name: 'Wade Warren',
      job: 'Dog Trainer',
      image: 'assets/images/users/user-1.jpg',
    },
    {
      id: 2,
      name: 'Robert Fox',
      job: 'President of Sales',
      image: 'assets/images/users/user-2.jpg',
    },
    {
      id: 3,
      name: 'Jane Cooper',
      job: 'Nursing Assistant',
      image: 'assets/images/users/user-3.jpg',
    },
    {
      id: 4,
      name: 'Frank Esteban',
      job: 'Software Tester',
      image: 'assets/images/users/user-4.jpg',
    },
    {
      id: 5,
      name: 'Dianne Russell',
      job: 'Web Designer',
      image: 'assets/images/users/user-5.jpg',
    },
  ];
}
