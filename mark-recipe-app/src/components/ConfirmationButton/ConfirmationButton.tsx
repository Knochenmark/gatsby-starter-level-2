import * as React from 'react';

import Help from '../Icons/Help';
import Remove from '../Icons/Remove';
import {
  confirmationButtonIconStyle,
  confirmationButtonStyle,
  confirmationButtonTextStyle
} from './ConfirmationButtonStyles';

interface IConfirmationButtonProps {
  onConfirmCallback: () => void
}

export class ConfirmationButton extends React.Component<IConfirmationButtonProps, any> {
  private defaultText = 'Delete Recipe';

  constructor(props: IConfirmationButtonProps) {
    super(props);
    this.state = {
      buttonText: this.defaultText,
      status: 'delete',
    };
    this.onclickHandler = this.onclickHandler.bind(this);
    this.reset = this.reset.bind(this);
  }

  public reset() {
    this.setState({
      buttonText: this.defaultText,
      status: 'delete',
    });
  }

  public onclickHandler() {
    if (this.state.status === 'delete') {
      this.setState({
        buttonText: 'Are you sure?',
        status: 'confirm',
      });
      setTimeout(() => {
        this.reset();
      }, 2000);
    } else {
      this.props.onConfirmCallback();
    }
  }

  public render() {
    return (
      <button className={confirmationButtonStyle} onClick={this.onclickHandler}>
        <div className={confirmationButtonIconStyle + ` ${this.state.status}`}>
          <i className='delete'><Remove /></i>
          <i className='confirm'><Help /></i>
        </div>
        <div className={confirmationButtonTextStyle + ` ${this.state.status}`}>
          <span>{this.state.buttonText}</span>
        </div>
      </button>
    );
  }
}
