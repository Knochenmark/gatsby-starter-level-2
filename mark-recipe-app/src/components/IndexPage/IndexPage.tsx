import * as React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '../../_domain/IStoreState';
import { TabBarItem } from '../../_domain/TabBarItem';
import {
    createRecipeAction,
    resetAllRecipesAction,
    setSelectedRecipeAction,
} from '../../actions/RecipeActions';
import { getSelectedTab } from '../../RecipeReducer';
import { BookmarkList } from '../BookmarkList/BookmarkList';
import { Chip } from '../Chip/Chip';
import { IconButton } from '../IconButton/IconButton';
import { IconButtonColor } from '../IconButton/IconButttonColor';
import Bookmark from '../Icons/Bookmark';
import Danger from '../Icons/Danger';
import Plus from '../Icons/Plus';
import { IndexList } from '../IndexList/IndexList';
import { SearchBar } from '../SearchBar/SearchBar';
import { TabBar } from '../TabBar/TabBar';
import {
    chipContainerStyle,
    dangerButtonStyle,
    indexPageBackgroundStyle,
    indexPageContentStyle,
    indexPageStyle,
} from './IndexPageStyles';

export interface IIndexPageProps {
  createRecipe: () => void;
  resetAllRecipes: () => void;
  selectedTab: TabBarItem;
  setSelectedRecipe: (recipeName: string) => void;
}

interface IIndexPageStateProps {
  selectedTab: TabBarItem;
}

interface IIndexPageDispatchProps {
  createRecipe: () => void;
  resetAllRecipes: () => void;
  setSelectedRecipe: (recipeName: string) => void;
}

export class IndexPageComponent extends React.Component<IIndexPageProps> {
  public render() {
    const headline = `${
      this.props.selectedTab === TabBarItem.RECIPES ? 'Recipe' : 'Bookmark'
    } List`;

    return (
      <div className={indexPageStyle}>
        <div className={indexPageContentStyle}>
          <h2>{headline}</h2>
          <TabBar />
          <SearchBar />
          <div className={chipContainerStyle}>
            <Chip
              chipText='Breakfast'
              onClickCallback={active =>
                console.log('clicked chip breakfast', active, 'active?')
              }
            />
            <Chip
              chipText='Dessert'
              onClickCallback={active =>
                console.log('clicked chip dessert', active)
              }
            />
          </div>
          {this.props.selectedTab === TabBarItem.RECIPES && <IndexList />}
          {this.props.selectedTab === TabBarItem.BOOKMARKS && <BookmarkList />}
          {this.props.selectedTab === TabBarItem.BOOKMARKS && (
            <div className={indexPageBackgroundStyle}>
              <Bookmark />
            </div>
          )}
          <div className='button-wrapper'>
            <IconButton
              styles={dangerButtonStyle}
              onClickCallback={this.props.resetAllRecipes}
              buttonText='Reset All Recipes'
              icon={<Danger />}
              color={IconButtonColor.RED}
            />
            <IconButton
              onClickCallback={this.props.createRecipe}
              buttonText='Create New Recipe'
              icon={<Plus />}
              color={IconButtonColor.GREEN}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: IStoreState): IIndexPageStateProps {
  return {
    selectedTab: getSelectedTab(state)
  };
}

function mapDispatchToProps(dispatch: any): IIndexPageDispatchProps {
  return {
    createRecipe: () => dispatch(createRecipeAction()),
    resetAllRecipes: () => dispatch(resetAllRecipesAction()),
    setSelectedRecipe: (recipeName: string) =>
      dispatch(setSelectedRecipeAction(recipeName))
  };
}

export const IndexPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPageComponent);
