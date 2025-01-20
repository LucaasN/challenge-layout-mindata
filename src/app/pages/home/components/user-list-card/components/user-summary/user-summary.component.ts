import { Component, Input } from '@angular/core';
import { AvatarComponent } from '@components/avatar/avatar.component';
import { ButtonComponent } from '@components/button/button.component';
import { User } from '@models/user.model';

@Component({
  selector: 'app-user-summary',
  standalone: true,
  imports: [AvatarComponent, ButtonComponent],
  templateUrl: './user-summary.component.html',
  styleUrl: './user-summary.component.scss',
})
export class UserSummaryComponent {
  @Input() user?: User;
}
