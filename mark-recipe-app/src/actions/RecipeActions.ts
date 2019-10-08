import { IRecipe } from '../_domain/IRecipe';
import { TabBarItem } from '../_domain/TabBarItem';

export enum actionTypes {
  CREATE_RECIPE = '[Recipe] Create Recipe',
  DELETE_RECIPE = '[Recipe] Delete Recipe',
  SET_EDIT_MODE = '[Recipe] Set Edit Mode',
  SET_INDEX_VISIBILITY = '[Recipe] Set Index Visibility',
  SET_BOOKMARK = '[Recipe] Bookmark Recipe',
  SET_SELECTED_RECIPE = '[Recipe] Set selected Recipe',
  UPDATE_RECIPE = '[Recipe] Update Recipe',
  SAVE_RECIPE = '[Recipe] Save Recipe',
  SET_SEARCH_VALUE = '[Recipe] Set Search Value',
  SET_SELECTED_TAB = '[Recipe] Set Selected Tab',
  RESET_ALL_RECIPES = '[Recipe] Reset all Recipes'
}

export interface IResetAllRecipesAction{
  type: string;
}

export interface ISetSelectedTabAction {
  selectedTab: TabBarItem;
  type: string;
}

export interface ISetSearchValueAction {
  searchValue: string;
  type: string;
}

export interface ISetBookmarkAction {
  isBookmarked: boolean;
  recipeName: string;
  type: string;
}

export interface ISetIndexVisibilityAction {
  isIndexVisible: boolean;
  type: string;
}

export interface ISetEditModeAction {
  isEditMode: boolean;
  type: string;
}

export interface ICreateRecipeAction {
  type: string;
}

export interface IDeleteRecipeAction {
  recipe: IRecipe;
  type: string;
}

export interface ISetSelectedRecipeAction {
  recipeName: string;
  type: string;
}

export interface IUpdateRecipeAction {
  recipe: IRecipe;
  recipeName: string;
  type: string;
}

export interface ISaveRecipeAction {
  recipe: IRecipe;
  type: string;
}

export const resetAllRecipesAction = () => ({
  type: actionTypes.RESET_ALL_RECIPES
})

export const setSelectedTabAction = (selectedTab: TabBarItem) => ({
  selectedTab,
  type: actionTypes.SET_SELECTED_TAB
})

export const setSearchValueAction = (searchValue: string) => ({
  searchValue,
  type: actionTypes.SET_SEARCH_VALUE
})

export const setBookmarkAction = (recipeName: string, isBookmarked: boolean) => ({
  isBookmarked,
  recipeName,
  type: actionTypes.SET_BOOKMARK
});

export const updateRecipeAction = (recipe: IRecipe, recipeName: string) => ({
  recipe,
  recipeName,
  type: actionTypes.UPDATE_RECIPE
});

export const setIndexVisibilityAction = (isIndexVisible: boolean) => ({
  isIndexVisible,
  type: actionTypes.SET_INDEX_VISIBILITY
});

export const setEditModeAction = (isEditMode: boolean) => ({
  isEditMode,
  type: actionTypes.SET_EDIT_MODE
});

export const createRecipeAction = () => ({
  type: actionTypes.CREATE_RECIPE
});

export const saveRecipeAction = (recipe: IRecipe) => ({
  recipe,
  type: actionTypes.SAVE_RECIPE
});

export const deleteRecipeAction = (recipe: IRecipe) => ({
  recipe,
  type: actionTypes.DELETE_RECIPE
});

export const setSelectedRecipeAction = (recipeName: string) => ({
  recipeName,
  type: actionTypes.SET_SELECTED_RECIPE
});

export type Action
  = ICreateRecipeAction
  | IDeleteRecipeAction
  | ISetEditModeAction
  | ISetIndexVisibilityAction
  | ISetSelectedRecipeAction
  | IUpdateRecipeAction
  | ISetBookmarkAction
  | ISaveRecipeAction
  | ISetSearchValueAction
  | ISetSelectedTabAction
  | IResetAllRecipesAction;
