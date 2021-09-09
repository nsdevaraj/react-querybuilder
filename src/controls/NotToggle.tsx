import React from 'react';
import { NotToggleProps } from '../types';

const NotToggle = ({ className, handleOnChange, title, checked }: NotToggleProps) => {
  const onChange = (e: any) => handleOnChange(e.target.checked)
  // tslint:disable-next-line: react-a11y-input-elements
  return (<label className={className} title={title}>  <input role="checkbox" placeholder="" aria-checked={!!checked} type="checkbox" onChange={onChange} checked={!checked} /> </label>);
};

NotToggle.displayName = 'NotToggle';

export default NotToggle;