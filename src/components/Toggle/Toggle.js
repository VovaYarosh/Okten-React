import React from 'react';
import './Toggle.css';

const CN = 'default-checkbox';

const Checkbox = (props) => {
  const { onChange, isChecked, label = 'checkbox' } = props;

  console.log('Toggle render');
  return (
    <div>
        <label className="form-switch">
      <input type="checkbox" onChange={onChange} checked={isChecked}/>
        <i></i>
      <div className={`${CN}-label`}>{label}</div>
        </label>
    </div>
  );
};

export default Checkbox;