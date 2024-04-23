import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavigationComponent } from "./presenters/navigation/navigation.component";
import { LienNavigation } from "./business/entities/LienNavigation";
import { ContratPageComponent } from "./presenters/contrat-page/contrat-page.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, ContratPageComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "kata-credit-agricole";
  liensNavigationHeader: LienNavigation[] = [
    { url: "/", text: "Accueil" },
    { url: "/", text: "Contact" },
  ];
  liensNavigationFooter: LienNavigation[] = [
    { url: "/", text: "Nous contacter" },
    { url: "/", text: "Mentions légales" },
  ];
}
