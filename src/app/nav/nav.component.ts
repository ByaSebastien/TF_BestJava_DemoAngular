import { Component } from '@angular/core';
import { Link } from '../models/link';
import { of } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  links: Link[] = [
    { title: 'Home', url: '/home' },
    { title: 'About', url: '/about' },
    {
      title: 'Demos', children: [
        { title: 'Bindings', url: '/demo/demo01' },
        { title: 'Pipes', url: '/demo/demo02' },
        { title: 'Structural directives', url: '/demo/demo03' },
        { title: 'Component directives', url: '/demo/demo04' },
        { title: 'Input/Output', url: '/demo/demo05' },
      ],
      isVisible: false
    },
    {
      title: 'Exos', url: '/exo', children: [
        { title: 'Timer', url: '/exo/exo01' },
        { title: 'Shopping list 1', url: '/exo/exo02' },
      ],
      isVisible: false
    }
  ]

  toggleIsVisible(link: Link) {
    for (let l of this.links) {
      if (l !== link) {
        l.isVisible = false;
      }
    }
    link.isVisible = !link.isVisible;
  }
}