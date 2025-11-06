import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  encapsulation: ViewEncapsulation.Emulated
})

export class Skills {
tools = [
  { icon: '/assets/icons/skills/javascript-plain.svg', name: 'Javascript' },
  { icon: '/assets/icons/skills/typescript-original.svg', name: 'Typescript' },
  { icon: '/assets/icons/skills/html5-original.svg', name: 'HTML' },
  { icon: '/assets/icons/skills/css3-original.svg', name: 'CSS' },
  { icon: '/assets/icons/skills/azuresqldatabase-original.svg', name: 'SQL' },
  { icon: '/assets/icons/skills/php-plain.svg', name: 'PHP' },
  { icon: '/assets/icons/skills/react-original.svg', name: 'React' },
  { icon: '/assets/icons/skills/nextjs-original.svg', name: 'Next js' },
  { icon: '/assets/icons/skills/angular-original.svg', name: 'Angular' },
  { icon: '/assets/icons/skills/flutter-original.svg', name: 'Flutter' },
  { icon: '/assets/icons/skills/cakephp-original.svg', name: 'Cake PHP' },
  { icon: '/assets/icons/skills/nodejs-original.svg', name: 'Node Js' },
  { icon: '/assets/icons/skills/prisma-original.svg', name: 'Prisma' },
  { icon: '/assets/icons/skills/express-original.svg', name: 'Express' },
  { icon: '/assets/icons/skills/mysql-original.svg', name: 'MySQL' },
  { icon: '/assets/icons/skills/nginx-original.svg', name: 'Nginx' },
];

}
