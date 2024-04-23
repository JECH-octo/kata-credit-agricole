import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContratPageComponent } from "./contrat-page.component";
import { ContratService } from "../../services/contrat.service";
import { DonneesContrat } from "../../business/entities/DonneesContrat";
import { By } from "@angular/platform-browser";

describe("ContratPageComponent", () => {
  let component: ContratPageComponent;
  let fixture: ComponentFixture<ContratPageComponent>;

  const contratServiceStub = {
    selectOptions: ["Toutes les sections"],
    recupererContrat: jest.fn(),
    recupererTitreSections: jest.fn(),
    filtrerParSection: jest.fn(),
    modifierSection: jest.fn(),
  };

  const mockContrat: DonneesContrat[] = [
    {
      title: "titre 1",
      icon: "icon 1",
      items: [
        {
          label: "label 1",
          name: "name 1",
        },
      ],
    },
    {
      title: "titre 2",
      icon: "icon 2",
      items: [
        {
          label: "label 2",
          name: "name 2",
        },
      ],
    },
  ];

  const mockContratTitres: string[] = ["Titre 1", "Titre 2", "Titre 3"];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratPageComponent],
      providers: [{ provide: ContratService, useValue: contratServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(ContratPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("Quand on initialise le composant", () => {
    it("doit appeler contratService pour récupérer les données du contrat", () => {
      // given
      contratServiceStub.recupererContrat.mockReturnValue(mockContrat);
      const recupererContratSpy = jest.spyOn(
        contratServiceStub,
        "recupererContrat"
      );
      // when
      component.ngOnInit();
      // then
      expect(recupererContratSpy).toHaveBeenCalled();
    });

    it("doit appeler contratService pour récupérer les titres des sections", () => {
      // given
      contratServiceStub.recupererTitreSections.mockReturnValue(
        mockContratTitres
      );
      const recupererTitreSectionsSpy = jest.spyOn(
        contratServiceStub,
        "recupererTitreSections"
      );
      // when
      component.ngOnInit();
      // then
      expect(recupererTitreSectionsSpy).toHaveBeenCalled();
    });
  });

  describe("Quand on filtre les sections", () => {
    it("doit appeler contratService pour filtrer les sections", () => {
      // given
      contratServiceStub.filtrerParSection.mockReturnValue(undefined);
      const filtrerParSectionSpy = jest.spyOn(
        contratServiceStub,
        "filtrerParSection"
      );
      const select = fixture.debugElement.query(By.css("select"));
      const expectedSection = "nouvelleSection";

      // when
      select.triggerEventHandler("ngModelChange", expectedSection);
      // then
      expect(filtrerParSectionSpy).toHaveBeenCalledWith(expectedSection);
    });
  });
});
