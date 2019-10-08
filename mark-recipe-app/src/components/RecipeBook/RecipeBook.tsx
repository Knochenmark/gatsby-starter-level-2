import * as React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '../../_domain/IStoreState';
import { setSelectedRecipeAction } from '../../actions/RecipeActions';
import {
  getEditMode,
  getIndexVisibility
} from '../../RecipeReducer';
import Bug from '../Icons/Bug';
import { IndexPage } from '../IndexPage/IndexPage';
import { Recipe } from '../Recipe/Recipe';
import { RecipeForm } from '../RecipeForm/RecipeForm';
import {
  bugStyle,
  recipeBookStyle
} from './RecipeBookStyles';

interface IRecipeBookStateProps {
  isIndexVisible: boolean;
  isEditMode: boolean;
}

interface IRecipeBookDispatchProps {
  setSelectedRecipe: (recipeName: string) => void;
}

interface IRecipeBookProps {
  isIndexVisible: boolean;
  isEditMode: boolean;
  setSelectedRecipe: (recipeName: string) => void;
}

const mapStateToProps = (state: IStoreState): IRecipeBookStateProps => {
  return {
    isEditMode: getEditMode(state),
    isIndexVisible: getIndexVisibility(state)
  };
}

const mapDispatchToProps = (dispatch: any): IRecipeBookDispatchProps => {
  return {
    setSelectedRecipe: (recipeName: string) =>
      dispatch(setSelectedRecipeAction(recipeName)),
  };
}

export class RecipeBookComponent extends React.Component<IRecipeBookProps> {
  constructor(props: IRecipeBookProps) {
    super(props);
    this.setRecipeName = this.setRecipeName.bind(this);
  }

  public setRecipeName(recipeName: string) {
    this.props.setSelectedRecipe(recipeName);
  }

  public render(): JSX.Element {
    const isEditMode = this.props.isEditMode;
    const recipeContainerClass = this.props.isIndexVisible ? "recipe-container" : "recipe-container visible";

    return (
      <div>
        <div className={recipeBookStyle}>
          <IndexPage />
          <div className={recipeContainerClass}>
            {isEditMode ? <RecipeForm /> : <Recipe />}
          </div>
        </div>
        <a href='https://github.com/Knochenmark/recipebox/issues' title='Report a bug' className={bugStyle}>
          <Bug />
        </a>
      </div>
    );
  }
}

export const RecipeBook = connect(mapStateToProps, mapDispatchToProps)(RecipeBookComponent)
