import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LienNavigation } from "../../business/entities/LienNavigation";

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navigation.component.html",
  styleUrl: "./navigation.component.scss",
})
export class NavigationComponent {
  @Input() liensNavigation: LienNavigation[] = [];
}
