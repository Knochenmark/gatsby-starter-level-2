import { exampleRecipeList } from './_config/exampleRecipeList';
import { IRecipe } from './_domain/IRecipe';
import { IStoreState } from './_domain/IStoreState';
import { LocalStorageWrapper } from './_domain/LocalStorageWrapper';
import { TabBarItem } from './_domain/TabBarItem';
import {
  Action,
  actionTypes,
  IDeleteRecipeAction,
  ISaveRecipeAction,
  ISetBookmarkAction,
  ISetEditModeAction,
  ISetIndexVisibilityAction,
  ISetSearchValueAction,
  ISetSelectedRecipeAction,
  ISetSelectedTabAction,
  IUpdateRecipeAction
} from './actions/RecipeActions';

const LocalStorage = new LocalStorageWrapper();
const storageRecipeList = LocalStorage.getItem('recipes');
const initialRecipeList = storageRecipeList ? storageRecipeList : exampleRecipeList;
if (!storageRecipeList || storageRecipeList.length === 0) {
  LocalStorage.setItem('recipes', exampleRecipeList);
}

export const initialState: IStoreState = {
  isEditMode: false,
  isIndexVisible: true,
  recipes: initialRecipeList,
  searchValue: '',
  selectedRecipe: initialRecipeList[0],
  selectedTab: TabBarItem.RECIPES,
}

const recipes = (state: IStoreState = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_TAB:
      const setSelectedTabAction = action as ISetSelectedTabAction;
      return {
        ...state,
        selectedTab: setSelectedTabAction.selectedTab
      }
    case actionTypes.SET_SEARCH_VALUE:
      const setSearchValueAction = action as ISetSearchValueAction;
      return {
        ...state,
        searchValue: setSearchValueAction.searchValue
      }
    case actionTypes.SET_INDEX_VISIBILITY:
      const setIndexVisibilityAction = action as ISetIndexVisibilityAction;
      return {
        ...state,
        isEditMode: false,
        isIndexVisible: setIndexVisibilityAction.isIndexVisible
      };
    case actionTypes.SET_EDIT_MODE:
      const { isEditMode } = action as ISetEditModeAction;
      return {
        ...state,
        isEditMode,
      };
    case actionTypes.CREATE_RECIPE:
      return {
        ...state,
        isEditMode: true,
        isIndexVisible: false,
        selectedRecipe: undefined,
      };
    case actionTypes.DELETE_RECIPE: {
      const deleteRecipeAction = action as IDeleteRecipeAction;
      const newRecipeList = state.recipes.filter(r =>
        r.name !== deleteRecipeAction.recipe.name
      );
      LocalStorage.setItem('recipes', newRecipeList);
      return {
        ...state,
        isIndexVisible: true,
        recipes: newRecipeList,
        selectedRecipe: undefined,
      };
    }
    case actionTypes.SET_SELECTED_RECIPE: {
      const { recipeName } = action as ISetSelectedRecipeAction;
      return {
        ...state,
        isIndexVisible: false,
        selectedRecipe: state.recipes.find(recipe => recipe.name === recipeName),
      };
    }
    case actionTypes.UPDATE_RECIPE: {
      const { recipe, recipeName } = action as IUpdateRecipeAction;
      const newRecipeList = state.recipes.map(r => {
        return r.name === recipeName ? recipe : r;
      });
      LocalStorage.setItem('recipes', newRecipeList);
      return {
        ...state,
        isEditMode: false,
        recipes: newRecipeList,
        selectedRecipe: recipe
      };
    }
    case actionTypes.SET_BOOKMARK: {
      const { recipeName, isBookmarked } = action as ISetBookmarkAction;
      let selectedRecipe;
      const newRecipes = state.recipes.map(r => {
        let bookmarkedRecipe;
        if (r.name === recipeName) {
          bookmarkedRecipe = { ...r };
          selectedRecipe = bookmarkedRecipe;
          bookmarkedRecipe.isBookmarked = isBookmarked;
        }
        return bookmarkedRecipe || r;
      });
      LocalStorage.setItem('recipes', newRecipes);
      return {
        ...state,
        recipes: newRecipes,
        selectedRecipe
      }
    }
    case actionTypes.SAVE_RECIPE: {
      const { recipe } = action as ISaveRecipeAction;
      LocalStorage.setItem('recipes', [...state.recipes, recipe]);
      return {
        ...state,
        isEditMode: false,
        recipes: [...state.recipes, recipe],
        selectedRecipe: recipe
      }
    }
    case actionTypes.RESET_ALL_RECIPES: {
      LocalStorage.setItem('recipes', exampleRecipeList);
      return {
        ...state,
        recipes: exampleRecipeList,
        selectedRecipe: exampleRecipeList[0]
      }
    }
    default:
      return { ...state };
  }
}

export const getRecipes = (state: IStoreState): IRecipe[] => state.recipes;
export const getBookmarkedRecipes = (state: IStoreState): IRecipe[] =>
  state.recipes.filter(r => r.isBookmarked);
export const getSelectedRecipe = (state: IStoreState): IRecipe => state.selectedRecipe;
export const getEditMode = (state: IStoreState): boolean => state.isEditMode;
export const getIndexVisibility = (state: IStoreState): boolean => state.isIndexVisible;
export const getSearchValue = (state: IStoreState): string => state.searchValue;
export const getSelectedTab = (state: IStoreState): TabBarItem => state.selectedTab;

export default recipes
