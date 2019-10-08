import { Difficulty } from './Difficulty';

export interface IRecipe {
  cookingTime: number;
  difficulty: Difficulty;
  imageUrl: string;
  ingredients: string[];
  instructions: string;
  isBookmarked: boolean;
  name: string;
  preparationTime: number;
}
