interface itemContrat {
  label: string;
  name: string;
  url?: string;
}

export interface DonneesContrat {
  title: string;
  icon: string;
  items: itemContrat[];
}
