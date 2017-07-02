import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';

import { capitilize } from '../../../utils';
import s from './Tag.scss';

const Tag = ({ children, theme, inverted }) => {
  const style = classNames(
    s.tag,
    theme ? s[`tag${capitilize(theme)}`] : null,
    inverted
      ? theme ? s[`tag${capitilize(theme)}-inverted`] : s['tag-inverted']
      : null
  );

  return (
    <div className={ style }>
      {children}
    </div>
  );
};

Tag.propTypes = {
  theme: PT.string,
  children: PT.any.isRequired,
  inverted: PT.bool
};

export default Tag;
