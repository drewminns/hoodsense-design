import React from 'react'; // eslint-disable-line
import PT from 'prop-types';
import classNames from 'classnames';

import { capitilize } from '../../../utils';
import s from './Button.scss';

const Button = ({ 
  children, 
  full,
  handleClick,
  disabled,
  loading,
  tabIndex,
  theme,
  type, 
  size,
  }) => {

  const style = classNames(
    s.btn,
    theme ? s[`btn${capitilize(theme)}`] : null,
    full ? s['btnFull'] : null,
    size ? s[`btn${capitilize(size)}`] : null
  );

  return (
    <button
      type={ type }
      disabled={ disabled }
      className={ style }
      onClick={ handleClick }
      tabIndex={ tabIndex }
    >
      { children }
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  handleClick: () => {},
  full: false,
  loading: false,
  tabIndex: 1,
  type: 'button',
};

Button.propTypes = {
  type: PT.string,
  theme: PT.string,
  children: PT.any.isRequired,
  loading: PT.bool,
  full: PT.bool,
  tabIndex: PT.number,
  disabled: PT.bool,
  handleClick: PT.func,
  size: PT.string,
};

export default Button;