import React, { Component } from 'react';
import './Toggle.css'

const CN = 'default-btn';

export class Toggle extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { onClick } = this.props;
        console.log('I\' here');
        onClick && onClick();
    }
    render() {
        const { className = '', type = 'checkbox', label = '' }
        = this.props;
    return(

<div>
<label className="form-switch">

<input type="checkbox"
  className={`${CN} ${className}`}
  onClick={this.onClick}
/>
<i></i>
    Select me
</label>
</div>
    )
}
}