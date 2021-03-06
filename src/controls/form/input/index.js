import React from 'react';

import './index.scss';

const Input = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={ handleChange } { ...otherProps } />
      {
        label ?
        (<label className={ `${ otherProps.value.length ? 'shrink' : '' } form-input-label` }>
          { label }
        </label>)
        : null
      }
    </div>
  )
}

export default Input;