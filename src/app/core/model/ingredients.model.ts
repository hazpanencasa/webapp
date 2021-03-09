export interface Ingredient {
  ingredient: any;
  id: string;
  can_be_modified: boolean;
  formula?: object;
  cost: number;
  user: any;
  hydration: any;
  references?: Array<any>;
  is_flour: boolean;
  name: string;
}
