import { Ingredient } from "./ingredient.model";

export class Gerecht {
  naam: string;
  vis: boolean;
  vlees: boolean;
  aantalPersonen: Number;
  gebruikerId: Number;
  vegetarisch: boolean;
  ingredienten: Array<Ingredient>;
}
