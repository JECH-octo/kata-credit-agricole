import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContratItemComponent } from "./contrat-item.component";
import { DonneesContrat } from "../../business/entities/DonneesContrat";
import { ContratService } from "../../services/contrat.service";
import { By } from "@angular/platform-browser";

describe("ContratItemComponent", () => {
  let component: ContratItemComponent;
  let fixture: ComponentFixture<ContratItemComponent>;
  let mockDonneesContrat: DonneesContrat = {
    title: "Titre 1",
    icon: "icon 1",
    items: [],
  };

  const contratServiceStub = {
    recupererContrat: jest.fn(),
    recupererTitreSections: jest.fn(),
    filtrerParSection: jest.fn(),
    modifierSection: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratItemComponent],
      providers: [{ provide: ContratService, useValue: contratServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(ContratItemComponent);
    component = fixture.componentInstance;
    component.donneeContrat = mockDonneesContrat;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("Quand on clique sur le bouton Modifier", () => {
    it("doit appeler modifierSection de contratService", () => {
      // given
      contratServiceStub.modifierSection.mockReturnValue(undefined);
      const modifierSectionSpy = jest.spyOn(
        contratServiceStub,
        "modifierSection"
      );
      const button = fixture.debugElement.query(By.css(".btn-modifier"));
      // when
      button.nativeElement.click();
      // then
      expect(modifierSectionSpy).toHaveBeenCalledWith(mockDonneesContrat.title);
    });
  });
});
