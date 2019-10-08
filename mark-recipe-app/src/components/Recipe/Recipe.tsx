import * as React from 'react';
import { connect } from 'react-redux';

import { IRecipe } from '../../_domain/IRecipe';
import { IStoreState } from '../../_domain/IStoreState';
import {
  deleteRecipeAction,
  setBookmarkAction,
  setEditModeAction,
  setIndexVisibilityAction
} from '../../actions/RecipeActions';
import { getSelectedRecipe } from '../../RecipeReducer';
import { ConfirmationButton } from '../ConfirmationButton/ConfirmationButton';
import { IconButton } from '../IconButton/IconButton';
import { IconButtonColor } from '../IconButton/IconButttonColor';
import Edit from '../Icons/Edit';
import HeartFilled from '../Icons/HeartFilled';
import HeartOutlined from '../Icons/HeartOutlined';
import Left from '../Icons/Left';
import {
  buttonWrapperStyle,
  recipeContentStyle,
  recipeImageStyle,
  recipeIngredientStyle,
  recipeInstructionStyle,
  recipeOverlayStyle,
  recipeStyle,
  recipeTitleStyle,
  timingWrapperStyle
} from './RecipeStyles';

interface IRecipeStateProps {
  selectedRecipe: IRecipe;
}

interface IRecipeDispatchProps {
  bookmarkRecipe: (recipeName: string, isBookmarked: boolean) => void;
  deleteRecipe: (recipe: IRecipe) => void;
  setEditMode: () => void;
  showIndex: () => void;
}

interface IRecipeProps {
  bookmarkRecipe: (recipeName: string, isBookmarked: boolean) => void;
  deleteRecipe: (recipe: IRecipe) => void;
  selectedRecipe: IRecipe;
  setEditMode: () => void;
  showIndex: () => void;
}

export class RecipeComponent extends React.Component<IRecipeProps> {
  constructor(props: IRecipeProps) {
    super(props);
    this.bookmarkHandler = this.bookmarkHandler.bind(this);
  }

  public getBookmarkText() {
    return this.props.selectedRecipe && this.props.selectedRecipe.isBookmarked
      ? <HeartFilled />
      : <HeartOutlined />;
  }

  public bookmarkHandler() {
    const selectedRecipe = this.props.selectedRecipe;
    if (selectedRecipe) {
      this.props.bookmarkRecipe(selectedRecipe.name, !selectedRecipe.isBookmarked);
    }
  }

  public render(): JSX.Element {

    const ingredientList = this.props.selectedRecipe
      && this.props.selectedRecipe.ingredients
      && this.props.selectedRecipe.ingredients.map((ingredient: string, i: number) =>
        <span key={i + ingredient}>{ingredient}</span>
      );

    let ImageStyle = {};
    if (this.props.selectedRecipe && this.props.selectedRecipe.imageUrl) {
      ImageStyle = {
        backgroundImage: 'url(' + this.props.selectedRecipe.imageUrl + ')',
        backgroundSize: 'cover',
      };
    }

    return (
      <div className={recipeStyle}>
        <div className={recipeOverlayStyle}>
          <span className='back' onClick={this.props.showIndex}><Left /></span>
          <span className='bookmark' onClick={this.bookmarkHandler}>{this.getBookmarkText()}</span>
        </div>
        <div className={recipeImageStyle} style={ImageStyle} />
        <div className={recipeContentStyle}>
          <h2 className={recipeTitleStyle}>
            {this.props.selectedRecipe && this.props.selectedRecipe.name}
          </h2>
          <div className={timingWrapperStyle}>
            <div>
              <h3>Preparation</h3>
              <span>{this.props.selectedRecipe && this.props.selectedRecipe.preparationTime
                ? `${this.props.selectedRecipe.preparationTime}min`
                : `n/a`}</span>
            </div>
            <div>
              <h3>Cooking</h3>
              <span>{this.props.selectedRecipe && this.props.selectedRecipe.cookingTime
                ? `${this.props.selectedRecipe.cookingTime}min`
                : `n/a`}</span>
            </div>
            <div>
              <h3>Difficulty</h3>
              <span>{this.props.selectedRecipe ? this.props.selectedRecipe.difficulty : ''}</span>
            </div>
          </div>
          <div className={recipeIngredientStyle}>
            <h3>Ingredients</h3>
            {ingredientList}
          </div>
          <div className={recipeInstructionStyle}>
            <h3>Instructions</h3>
            <span>{this.props.selectedRecipe ? this.props.selectedRecipe.instructions : ''}</span>
          </div>
          <div className={buttonWrapperStyle}>
            <IconButton onClickCallback={this.props.setEditMode} buttonText='Edit Recipe' icon={<Edit />} color={IconButtonColor.GREEN} />
            <ConfirmationButton onConfirmCallback={this.props.deleteRecipe.bind(this, this.props.selectedRecipe)} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState, ownProps: {}): IRecipeStateProps => {
  return {
    selectedRecipe: getSelectedRecipe(state)
  }
}

const mapDispatchToProps = (dispatch: any): IRecipeDispatchProps => {
  return {
    bookmarkRecipe: (recipeName: string, isBookmarked: boolean) => dispatch(setBookmarkAction(recipeName, isBookmarked)),
    deleteRecipe: (recipe: IRecipe) => dispatch(deleteRecipeAction(recipe)),
    setEditMode: () => dispatch(setEditModeAction(true)),
    showIndex: () => dispatch(setIndexVisibilityAction(true))
  }
}

export const Recipe = connect(mapStateToProps, mapDispatchToProps)(RecipeComponent)
