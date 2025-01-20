import { Component } from '@angular/core';
import { AvatarComponent } from '@components/avatar/avatar.component';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [ButtonComponent, AvatarComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {}
