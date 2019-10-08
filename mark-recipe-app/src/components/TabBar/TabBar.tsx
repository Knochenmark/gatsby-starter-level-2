import * as React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '../../_domain/IStoreState';
import { TabBarItem } from '../../_domain/TabBarItem';
import { setSelectedTabAction } from '../../actions/RecipeActions';
import { getSelectedTab } from '../../RecipeReducer';
import {
  tabBarItemStyle,
  tabBarStyle
} from './TabBarStyles';

interface ITabBarStateProps {
  selectedTab: TabBarItem;
}

interface ITabBarDispatchProps {
  setSelectedTab: (activeTab: TabBarItem) => void;
}

interface ITabBarProps {
  selectedTab: TabBarItem;
  setSelectedTab: (activeTab: TabBarItem) => void;
}

export class TabBarComponent extends React.Component<ITabBarProps> {
  private tabItemList: TabBarItem[] = [TabBarItem.RECIPES, TabBarItem.BOOKMARKS];

  public render() {
    const tabs = this.tabItemList.map((tab: any) => {
      const active = tab === this.props.selectedTab ? 'active' : '';
      return <div key={tab} className={`${tabBarItemStyle} ${active}`} onClick={this.props.setSelectedTab.bind(this, tab)}>
        {tab}
      </div>
    });
    return (
      <div>
        <div className={tabBarStyle}>{tabs}</div>
        <div className="underline" />
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState, ownProps: {}): ITabBarStateProps => {
  return {
    selectedTab: getSelectedTab(state)
  }
}

const mapDispatchToProps = (dispatch: any): ITabBarDispatchProps => {
  return {
    setSelectedTab: (activeTab: TabBarItem) => dispatch(setSelectedTabAction(activeTab)),
  }
}

export const TabBar = connect(mapStateToProps, mapDispatchToProps)(TabBarComponent)
