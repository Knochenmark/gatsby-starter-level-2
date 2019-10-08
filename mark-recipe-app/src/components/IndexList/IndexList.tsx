import * as React from 'react';
import { connect } from 'react-redux';

import { IRecipe } from '../../_domain/IRecipe';
import { IStoreState } from '../../_domain/IStoreState';
import { setSelectedRecipeAction } from '../../actions/RecipeActions';
import {
  getRecipes,
  getSearchValue
} from '../../RecipeReducer';
import {
  indexListItemStyle,
  indexListRecipeStyle
} from './IndexListStyles';

interface IIndexListStateProps {
  recipes: IRecipe[];
  searchValue: string;
}

export interface IIndexListProps {
  recipes: IRecipe[];
  searchValue: string;
  setSelectedRecipe: (recipeName: string) => void;
}

interface IIndexItemDispatchProps {
  setSelectedRecipe: (recipeName: string) => void;
}

export class IndexListComponent extends React.Component<IIndexListProps> {
  public render() {
    const recipes = this.props.recipes.filter(i => {
      if (this.props.searchValue) {
        const flipLogic = i.name.length >= this.props.searchValue.length;
        if (flipLogic) {
          return i.name.toLowerCase().includes(this.props.searchValue);
        } else {
          return this.props.searchValue.toLowerCase().includes(i.name.toLowerCase())
        }
      } else {
        return true;
      }
    });

    const indices = recipes
      .map(recipe => recipe.name[0].toUpperCase())
      .filter((v: string, i: number, a: string[]) => a.indexOf(v) === i);

    const obj: any = {};
    recipes.forEach((recipe: IRecipe) => {
      const key = recipe.name[0].toUpperCase();
      if (obj.hasOwnProperty(key)) {
        obj[key].push(recipe)
      } else {
        obj[key] = [recipe]
      }
    });

    const indexItems = indices.sort().map(index => {
      const recipeItems = obj[index].map((recipe: IRecipe, i: number) => {
        return <li key={index + i}>
          <span onClick={this.props.setSelectedRecipe.bind(this, recipe.name)}>
            {recipe.name}
          </span>
        </li>
      });
      return <div className='recipe' key={index}>
        <span>{index}({obj[index].length})</span>
        <ul className={indexListRecipeStyle}>
          {recipeItems}
        </ul>
      </div>
    });

    const emptyIndexList = <div className="empty">
      You havn't created any recipes yet
    </div>;

    const emptySearchResultList = <div className="empty">
      No matching recipes found
    </div>;

    return (
      <div className={indexListItemStyle}>
        {indexItems.length > 0 && indexItems}
        {(indexItems.length < 1 && this.props.searchValue.length < 1) && emptyIndexList}
        {(indexItems.length < 1 && this.props.searchValue.length > 0) && emptySearchResultList}
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState, ownProps: {}): IIndexListStateProps => ({
  recipes: getRecipes(state),
  searchValue: getSearchValue(state)
})

const mapDispatchToProps = (dispatch: any): IIndexItemDispatchProps => ({
  setSelectedRecipe: (recipeName: string) => dispatch(setSelectedRecipeAction(recipeName)),
})

export const IndexList = connect(mapStateToProps, mapDispatchToProps)(IndexListComponent);
