import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContratItemComponent } from "../contrat-item/contrat-item.component";
import { ContratService } from "../../services/contrat.service";
import { DonneesContrat } from "../../business/entities/DonneesContrat";
import { FormsModule } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-contrat-page",
  standalone: true,
  imports: [ContratItemComponent, CommonModule, FormsModule],
  templateUrl: "./contrat-page.component.html",
  styleUrl: "./contrat-page.component.scss",
})
export class ContratPageComponent implements OnInit {
  listeDonneesContrat$: Observable<DonneesContrat[]> = new Observable();
  sectionMessageClicked$: Observable<string> = new Observable();
  selectOptions: string[] = [];
  valeurFiltreSection: string = "";
  constructor(private contratService: ContratService) {}

  ngOnInit(): void {
    this.initListeDonneesContrat();
    this.initFiltre();
  }

  initListeDonneesContrat(): void {
    this.listeDonneesContrat$ = this.contratService.donneesContrat$;
    this.sectionMessageClicked$ = this.contratService.sectionClicked$;
    this.contratService.recupererContrat();
  }

  initFiltre(): void {
    this.selectOptions = this.contratService.selectOptions;
    this.selectOptions = this.selectOptions.concat(
      this.contratService.recupererTitreSections()
    );
    this.valeurFiltreSection = this.selectOptions[0];
  }

  onSelectChange(nouvelleSectionFiltre: string): void {
    this.contratService.filtrerParSection(nouvelleSectionFiltre);
  }

  trackByTitle(index: number, item: DonneesContrat): string {
    return item.title;
  }
}
