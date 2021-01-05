export interface Ingredient {
  id: string;
  can_be_modified: boolean;
  formula?: object;
  cost: number;
  hydration: any;
  is_flour: boolean;
  name: string;
}
