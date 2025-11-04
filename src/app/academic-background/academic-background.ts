import { Component, ViewEncapsulation } from '@angular/core';

interface coursesAcademic {
  id: number,
  icon: string,
  title: string,
  name: string
};

@Component({
  selector: 'academic-background',
  imports: [],
  templateUrl: './academic-background.html',
  styleUrl: './academic-background.scss',
  encapsulation: ViewEncapsulation.Emulated
})

export class AcademicBackground {
  listCourse: coursesAcademic[] = [
    {
      id: 1,
      icon: '../../assets/icons/tecnico.svg',
      title: 'Técnico',
      name: 'Informática - E.E.E.P José Vidal Alves - 2018'
    },
    {
      id: 2,
      icon: '../../assets/icons/pos.svg',
      title: 'Pós graduação',
      name: 'Engenharia de software - Faculdade Descomplica - 2025'
    },
     {
      id: 3,
      icon: '../../assets/icons/graduacao.svg',
      title: 'Graduação',
      name: 'Redes de computadores - Instituto federal de tecnologia e ciência - 2022'
    }
  ];
}
