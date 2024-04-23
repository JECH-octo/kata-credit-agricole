import { Injectable } from "@angular/core";
import { donneesContrat } from "../../../data/data";
import { DonneesContrat } from "../business/entities/DonneesContrat";
import { BehaviorSubject } from "rxjs";
import { IContratService } from "./IContratService";

@Injectable({
  providedIn: "root",
})
export class ContratService implements IContratService {
  private contratSubject = new BehaviorSubject<DonneesContrat[]>([]);
  private sectionSubject = new BehaviorSubject<string>("");
  selectOptions = ["Toutes les sections"];
  donneesContrat$ = this.contratSubject.asObservable();
  sectionClicked$ = this.sectionSubject.asObservable();
  constructor() {}

  recupererContrat(): void {
    this.contratSubject.next(donneesContrat);
  }

  recupererTitreSections(): string[] {
    return donneesContrat
      .filter((donnee: DonneesContrat) => donnee.title)
      .map(({ title }: { title: string }) => title);
  }

  filtrerParSection(nouvelleSection: string): void {
    if (nouvelleSection === this.selectOptions[0]) {
      this.recupererContrat();
      return;
    }
    this.contratSubject.next(
      donneesContrat.filter(
        (donnee: DonneesContrat) => donnee.title === nouvelleSection
      )
    );
  }

  modifierSection(titre: string): void {
    this.sectionSubject.next(`Section "` + titre + `" modifiée !`);
  }
}
