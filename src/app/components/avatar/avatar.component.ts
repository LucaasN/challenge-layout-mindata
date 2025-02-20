import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() image: string | undefined;
  @Input() size: 'small' | 'large' = 'small';
  defaultImage: string = 'ruta/a/default.jpg';
}
