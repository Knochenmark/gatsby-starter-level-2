import * as React from 'react';
import { connect } from 'react-redux';

import { IRecipe } from '../../_domain/IRecipe';
import { IStoreState } from '../../_domain/IStoreState';
import { setSelectedRecipeAction } from '../../actions/RecipeActions';
import {
  getBookmarkedRecipes,
  getSearchValue
} from '../../RecipeReducer';
import {
  bookmarkListItemStyle,
  bookmarkListRecipeStyle
} from './BookmarkListStyles';

interface IBookmarkListStateProps {
  bookmarkedRecipes: IRecipe[];
  searchValue: string;
}

export interface IBookmarkListProps {
  bookmarkedRecipes: IRecipe[];
  searchValue: string;
  setSelectedRecipe: (recipeName: string) => void;
}

interface IIndexItemDispatchProps {
  setSelectedRecipe: (recipeName: string) => void;
}

export class BookmarkListComponent extends React.Component<IBookmarkListProps> {
  public render() {
    const bookmarkedRecipes = this.props.bookmarkedRecipes.filter(i => {
      if (this.props.searchValue) {
        if (i.name.toLowerCase().includes(this.props.searchValue)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    });

    const indices = bookmarkedRecipes
      .map(recipe => recipe.name[0].toUpperCase())
      .filter((v: string, i: number, a: string[]) => a.indexOf(v) === i);

    const obj: any = {};
    bookmarkedRecipes.forEach((recipe: IRecipe) => {
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
      return <div className="bookmark" key={index}>
        <span>{index}({obj[index].length})</span>
        <ul className={bookmarkListRecipeStyle}>
          {recipeItems}
        </ul>
      </div>
    });

    const emptyBookmarkList = <div className="empty">
      You havn't bookmarked any recipes yet
    </div>;

    const emptySearchResultList = <div className="empty">
      No matching recipes found
    </div>;

    return (
      <div className={bookmarkListItemStyle}>
        {indexItems.length > 0 && indexItems}
        {(indexItems.length < 1 && this.props.searchValue.length < 1) && emptyBookmarkList}
        {(indexItems.length < 1 && this.props.searchValue.length > 0) && emptySearchResultList}
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState, ownProps: {}): IBookmarkListStateProps => ({
  bookmarkedRecipes: getBookmarkedRecipes(state),
  searchValue: getSearchValue(state)
})

const mapDispatchToProps = (dispatch: any): IIndexItemDispatchProps => ({
  setSelectedRecipe: (recipeName: string) => dispatch(setSelectedRecipeAction(recipeName)),
})

export const BookmarkList = connect(mapStateToProps, mapDispatchToProps)(BookmarkListComponent);
