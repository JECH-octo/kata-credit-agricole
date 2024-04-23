import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from "@angular/core";
import {
  DonneesContrat,
  ItemContrat,
} from "../../business/entities/DonneesContrat";
import { CommonModule } from "@angular/common";
import { ContratService } from "../../services/contrat.service";

@Component({
  selector: "app-contrat-item",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./contrat-item.component.html",
  styleUrl: "./contrat-item.component.scss",
})
export class ContratItemComponent implements AfterViewInit {
  @ViewChild("btnModifier") buttonElement!: ElementRef;

  @Input() donneeContrat!: DonneesContrat;

  constructor(private contratService: ContratService) {}

  ngAfterViewInit(): void {
    this.buttonElement.nativeElement.focus();
  }

  onBtnModifierClicked(titre: string) {
    this.contratService.modifierSection(titre);
  }

  itemTrackBy(index: number, item: ItemContrat): string {
    return item.label;
  }
}
