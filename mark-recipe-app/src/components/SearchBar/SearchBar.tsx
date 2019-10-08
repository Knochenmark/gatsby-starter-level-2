import * as React from 'react';
import { connect } from 'react-redux';
import { Subject } from 'rxjs';
import {
  debounceTime,
  map
} from 'rxjs/operators';

import { IStoreState } from '../../_domain/IStoreState';
import { setSearchValueAction } from '../../actions/RecipeActions';
import { getSearchValue } from '../../RecipeReducer';
import Cross from '../Icons/Cross';
import {
  searchBarClearStyle,
  searchbarHighlightStyle,
  searchBarStyle
} from './SearchBarStyles';

interface ISearchBarStateProps {
  searchValue: string;
}

export interface ISearchBarProps {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

interface ISearchBarDispatchProps {
  setSearchValue: (searchValue: string) => void;
}

interface ISearchBarState {
  searchValue: string;
}

export class SearchBarComponent extends React.Component<ISearchBarProps, ISearchBarState> {
  private searchValueInputSubject = new Subject<string>();

  constructor(props: ISearchBarProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClear = this.onClear.bind(this);
    this.searchValueInputSubject
      .pipe(
        debounceTime(300),
        map((v: string) => v.trim().toLowerCase())
      ).subscribe((value: string) => {
        this.props.setSearchValue(value);
      })

    this.state = {
      searchValue: '',
    };
  }

  public onChange(event: React.ChangeEvent) {
    const { value } = (event.target as HTMLInputElement);
    this.searchValueInputSubject.next(value);
    this.setState({
      searchValue: value,
    });
  }

  public onClear() {
    this.searchValueInputSubject.next('');
    this.setState({
      searchValue: '',
    });
  }

  public render() {
    const str = this.props.searchValue;
    return (
      <div className={searchBarStyle}>
        <input
          onChange={this.onChange}
          placeholder='Search Recipe...'
          spellCheck={false}
          value={this.state.searchValue}
        />
        <span className={searchbarHighlightStyle}>
          {str.replace(/ /g, "\u00a0")}
        </span>
        {
          str.trim() && (
            <i
              className={searchBarClearStyle}
              onClick={this.onClear}
            >
              <Cross />
            </i>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState, ownProps: {}): ISearchBarStateProps => {
  return {
    searchValue: getSearchValue(state)
  }
}

function mapDispatchToProps(dispatch: any): ISearchBarDispatchProps {
  return {
    setSearchValue: (searchValue: string) => dispatch(setSearchValueAction(searchValue)),
  };
}

export const SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent);
