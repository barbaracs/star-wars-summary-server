export interface PersonPropsT {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: 'Male' | 'Female' | 'unknown' | 'n/a';
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: Date;
  edited: Date;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}