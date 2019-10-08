import { IRecipe } from './IRecipe';
import { TabBarItem } from './TabBarItem';

export interface IStoreState {
  isEditMode: boolean;
  isIndexVisible: boolean;
  recipes: IRecipe[];
  searchValue: string;
  selectedRecipe: IRecipe;
  selectedTab: TabBarItem;
}
