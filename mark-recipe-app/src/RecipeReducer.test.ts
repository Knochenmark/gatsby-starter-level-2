import { exampleRecipeList } from './_config/exampleRecipeList';
import { IRecipe } from './_domain/IRecipe';
import { IStoreState } from './_domain/IStoreState';
import { TabBarItem } from './_domain/TabBarItem';
import * as RecipeActions from './actions/RecipeActions';
import RecipeReducer, { initialState } from './RecipeReducer';

jest.mock('./_domain/LocalStorageWrapper');

describe('Should test Recipes reducer', () => {
  test('test if set selected tab action works correctly', () => {
    const expectedResult: IStoreState = {
      ...initialState,
      selectedTab: TabBarItem.BOOKMARKS
    };
    const setSelectedTabAction: RecipeActions.ISetSelectedTabAction = {
      selectedTab: TabBarItem.BOOKMARKS,
      type: RecipeActions.actionTypes.SET_SELECTED_TAB
    };
    const actualResult = RecipeReducer(undefined, setSelectedTabAction);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if set search value action works correctly', () => {
    const expectedResult: IStoreState = {
      ...initialState,
      searchValue: 'tomato soup'
    };
    const setSearchValueAction: RecipeActions.ISetSearchValueAction = {
      searchValue: 'tomato soup',
      type: RecipeActions.actionTypes.SET_SEARCH_VALUE
    };
    const actualResult = RecipeReducer(undefined, setSearchValueAction);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if set index visibility action works correctly', () => {
    const expectedResult: IStoreState = {
      ...initialState,
      isIndexVisible: false
    };
    const setIndexVisibilityAction: RecipeActions.ISetIndexVisibilityAction = {
      isIndexVisible: false,
      type: RecipeActions.actionTypes.SET_INDEX_VISIBILITY
    };
    const actualResult = RecipeReducer(undefined, setIndexVisibilityAction);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if set edit mode action works correctly', () => {
    const expectedResult: IStoreState = {
      ...initialState,
      isEditMode: true
    };
    const setEditModeAction: RecipeActions.ISetEditModeAction = {
      isEditMode: true,
      type: RecipeActions.actionTypes.SET_EDIT_MODE
    };
    const actualResult = RecipeReducer(undefined, setEditModeAction);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if create recipe action works correctly', () => {
    const expectedResult = {
      ...initialState,
      isEditMode: true,
      isIndexVisible: false,
      selectedRecipe: undefined,
    }
    const createRecipeAction: RecipeActions.ICreateRecipeAction = {
      type: RecipeActions.actionTypes.CREATE_RECIPE
    }
    const actualResult = RecipeReducer(undefined, createRecipeAction);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if delete recipe action works correctly', () => {
    const expectedResult = {
      /* Type not specified here as the reducer needs to be fixed to return IStoreState type */
      ...initialState,
      isIndexVisible: true,
      recipes: exampleRecipeList.slice(0, exampleRecipeList.length - 1),
      selectedRecipe: undefined
    };
    const deleteRecipeAction: RecipeActions.IDeleteRecipeAction = {
      recipe: exampleRecipeList[exampleRecipeList.length - 1],
      type: RecipeActions.actionTypes.DELETE_RECIPE
    };
    const actualResult = RecipeReducer(undefined, deleteRecipeAction);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if edit recipe action works correctly', () => {
    const expectedResult: IStoreState = { ...initialState };
    expectedResult.recipes[0].name = 'updated name';
    const editRecipeAction: RecipeActions.IUpdateRecipeAction = {
      recipe: initialState.recipes[0],
      recipeName: 'updated name',
      type: RecipeActions.actionTypes.UPDATE_RECIPE
    };
    const actualResult = RecipeReducer(undefined, editRecipeAction);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if save recipe action works correctly', () => {
    const newRecipe: IRecipe = {
      ...exampleRecipeList[0],
      name: 'Some new recipe'
    };
    const expectedResult: IStoreState = {
      ...initialState,
      isEditMode: false,
      recipes: [...initialState.recipes, newRecipe],
      selectedRecipe: newRecipe
    };
    const saveRecipeAction: RecipeActions.ISaveRecipeAction = {
      recipe: newRecipe,
      type: RecipeActions.actionTypes.SAVE_RECIPE
    };
    const actualResult = RecipeReducer(undefined, saveRecipeAction);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if reset all recipes action works correctly', () => {
    const expectedResult = {
      ...initialState,
      recipes: exampleRecipeList,
      selectedRecipe: exampleRecipeList[0]
    }
    const resetAllRecipesAction: RecipeActions.IResetAllRecipesAction = {
      type: RecipeActions.actionTypes.RESET_ALL_RECIPES
    }
    const actualResult = RecipeReducer(undefined, resetAllRecipesAction);

    expect(actualResult).toEqual(expectedResult);
  });
});
