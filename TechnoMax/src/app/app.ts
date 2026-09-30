import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './Components/main/main';
import { Aside } from './Components/aside/aside';

@Component({
  imports: [RouterOutlet, Main, Aside],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TechnoMax');
}
