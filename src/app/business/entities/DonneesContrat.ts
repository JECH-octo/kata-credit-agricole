export interface ItemContrat {
  label: string;
  name: string;
  url?: string;
}

export interface DonneesContrat {
  title: string;
  icon: string;
  items: ItemContrat[];
}
