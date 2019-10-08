import * as React from 'react';

import { chipStyle } from './ChipStyles';

interface IChipProps {
  onClickCallback?: (active: boolean) => void;
  icon?: any;
  chipText: string;
}

export class Chip extends React.Component<IChipProps, any> {
  constructor(props: IChipProps) {
    super(props);
    this.state = {
      active: false
    };
    this.onclickHandler = this.onclickHandler.bind(this);
  }

  public onclickHandler() {
    this.setState(
      {
        active: !this.state.active
      },
      () => {
        if (this.props.onClickCallback) {
          this.props.onClickCallback(this.state.active);
        }
      }
    );
  }

  public render() {
    return (
      <div
        className={chipStyle(this.state.active)}
        onClick={this.onclickHandler}
      >
        {this.props.icon && <i>{this.props.icon}</i>}
        {this.props.chipText}
      </div>
    );
  }
}
