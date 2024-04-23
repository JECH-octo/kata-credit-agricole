export interface IContratService {
  recupererContrat(): void;
  recupererTitreSections(): string[];
  filtrerParSection(nouvelleSection: string): void;
  modifierSection(titre: string): void;
}
