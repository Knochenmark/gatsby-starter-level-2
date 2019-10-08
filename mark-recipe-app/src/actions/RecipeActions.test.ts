import { exampleRecipeList } from '../_config/exampleRecipeList';
import { TabBarItem } from '../_domain/TabBarItem';
import * as RecipeActions from './RecipeActions';

describe('Should test recipe actions and action creators', () => {
  test('test if set selected tab action returns correct value', () => {
    const expectedResult: RecipeActions.ISetSelectedTabAction = {
      selectedTab: TabBarItem.BOOKMARKS,
      type: RecipeActions.actionTypes.SET_SELECTED_TAB
    };
    const actualResult = RecipeActions.setSelectedTabAction(
      TabBarItem.BOOKMARKS
    );

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if set search value action returns correct value', () => {
    const expectedResult: RecipeActions.ISetSearchValueAction = {
      searchValue: 'tomato',
      type: RecipeActions.actionTypes.SET_SEARCH_VALUE
    };
    const actualResult = RecipeActions.setSearchValueAction('tomato');

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if set bookmark action returns correct value', () => {
    const expectedResult: RecipeActions.ISetBookmarkAction = {
      isBookmarked: true,
      recipeName: 'tomato soup',
      type: RecipeActions.actionTypes.SET_BOOKMARK
    };
    const actualResult = RecipeActions.setBookmarkAction('tomato soup', true);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if update recipe action returns correct value', () => {
    const expectedValue: RecipeActions.IUpdateRecipeAction = {
      recipe: exampleRecipeList[0],
      recipeName: 'Some Updated Name',
      type: RecipeActions.actionTypes.UPDATE_RECIPE
    };
    const actualResult = RecipeActions.updateRecipeAction(
      exampleRecipeList[0],
      'Some Updated Name'
    );

    expect(actualResult).toEqual(expectedValue);
  });

  test('test if set index visibility action returns correct value', () => {
    const expectedResult: RecipeActions.ISetIndexVisibilityAction = {
      isIndexVisible: true,
      type: RecipeActions.actionTypes.SET_INDEX_VISIBILITY
    };
    const actualResult = RecipeActions.setIndexVisibilityAction(true);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if set edit mode action returns correct value', () => {
    const expectedResult: RecipeActions.ISetEditModeAction = {
      isEditMode: false,
      type: RecipeActions.actionTypes.SET_EDIT_MODE
    };
    const actualResult = RecipeActions.setEditModeAction(false);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if create recipe action returns correct value', () => {
    const expectedResult: RecipeActions.ICreateRecipeAction = {
      type: RecipeActions.actionTypes.CREATE_RECIPE
    };
    const actualResult = RecipeActions.createRecipeAction();

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if save recipe action returns correct value', () => {
    const expectedResult: RecipeActions.ISaveRecipeAction = {
      recipe: exampleRecipeList[0],
      type: RecipeActions.actionTypes.SAVE_RECIPE
    };
    const actualResult = RecipeActions.saveRecipeAction(exampleRecipeList[0]);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if delete recipe action returns correct value', () => {
    const expectedResult: RecipeActions.IDeleteRecipeAction = {
      recipe: exampleRecipeList[0],
      type: RecipeActions.actionTypes.DELETE_RECIPE
    };
    const actualResult = RecipeActions.deleteRecipeAction(exampleRecipeList[0]);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if set selected recipe action returns correct value', () => {
    const expectedResult: RecipeActions.ISetSelectedRecipeAction = {
      recipeName: 'tomato soup',
      type: RecipeActions.actionTypes.SET_SELECTED_RECIPE
    };
    const actualResult = RecipeActions.setSelectedRecipeAction('tomato soup');

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if resetAllRecipes action returns correct value', () => {
    const expectedResult: RecipeActions.IResetAllRecipesAction = {
      type: RecipeActions.actionTypes.RESET_ALL_RECIPES
    };
    const actualResult = RecipeActions.resetAllRecipesAction();

    expect(actualResult).toEqual(expectedResult);
  });
});
