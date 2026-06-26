import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { About } from './components/about/about';
import { Footer } from "./components/footer/footer";
import { AboutMe } from "./components/about-me/about-me";
import { ServicesComponent } from "./components/service/service";
import { ProjetComponent } from "./components/projet/projet";
import { ContactMeComponent } from "./components/contact-me/contact-me";

@Component({
  selector: 'app-root',
  imports: [Header, About, Footer, AboutMe, ServicesComponent, ProjetComponent, ContactMeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portofolio');
}
