import React from 'react';
import './Toggle.css';

const CN = 'default-checkbox';

const Toggle = (props) => {
  const { onChange, label = 'checkbox' } = props;

  return (
    <div>

        <label
            className="form-switch"
        >

        <input
            type="checkbox"
            onChange={onChange}
        />

        <i></i>

        <div
            className={`${CN}-label`}>{label}
        </div>

        </label>
    </div>
  );
};

export default Toggle;