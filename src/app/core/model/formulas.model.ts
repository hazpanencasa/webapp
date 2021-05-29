export interface Formula {
  description: boolean | string;
  id: string;
  mixing: Mixing[];
  name: string;
  steps: Step[];
  unit_weight: string;
  units: string;
  user: User;
  organoleptic_characteristics?: string | null;
}

export interface User {
  can_clone: boolean;
  cloned: boolean;
  creator: Creator;
  modifiers: any[];
  owner: string;
  public: boolean;
  reference: string;
  shared_users: any[];
}

export interface Creator {
  date: Date;
  email: string;
  name: string;
}

interface Date {
  nanoseconds: number;
  seconds: number;
}

export interface Step {
  description: string;
  name: string;
  number: number;
  ingredients: IngredientStep[];
  temperature: Temperature;
  time: number;
  times: number;
}

export interface IngredientStep {
  ingredient: IngredientObjectStep;
  percentage: number;
}

export interface IngredientObjectStep {
  cost: number | null;
  formula: FormulaStep;
  hydration: number | string;
  id: string;
  is_flour: boolean;
  name: string;
  user: User;
}

export interface FormulaStep {
  compensation_percentage: number;
  mixing: MixingOrder[] | null;
  ingredients: IngredientsFormula[];
  proportion_factor: ProportionFactor;
  suggested_values: SuggestedValues;
}

export interface Temperature {
  max: number;
  min: number;
}

export interface Mixing {
  mixing_order: MixingOrder[];
  name: string;
}
export interface MixingOrder {
  description: string;
  ingredients: IngredientsFormula[];
}
export interface IngredientsFormula {
  ingredient: Ingredient;
  percentage: number;
}

export interface Ingredient {
  cost: number | null | boolean;
  hydration: string | number;
  id: string;
  is_flour: boolean;
  name: string;
  formula?: IngredientFormulaSecondRequest;
  references?: any[];
  user?: User;
}

export interface IngredientsSecondRequest {
  ingredient: Ingredient;
  percentage: number;
}

export interface IngredientFormulaSecondRequest {
  compensation_percentage: number;
  mixing: MixingOrder[];
  proportion_factor: ProportionFactor;
  suggested_values: SuggestedValues;
}
export interface ProportionFactor {
  factor: string;
}

export interface SuggestedValues {
  max: number;
  min: number;
}
