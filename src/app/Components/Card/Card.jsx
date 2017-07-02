import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';

import s from './Card.scss';

const renderMedia = mediaPath => {
  if (!mediaPath) {
    return null;
  }

  return (
    <div
      className={ s.media }
      style={ {
        backgroundImage: `url(${mediaPath})`
      } }
    />
  );
};

const Card = ({ title, subTitle, featureImage }) => {
  const style = classNames(s.card, featureImage ? s.mediaIncluded : null);

  return (
    <div className={ style }>
      {renderMedia('https://unsplash.it/200/300')}
      <div className={ s.body }>
        <p className={ s.title }>
          {title}
        </p>
        <p className={ s.subTitle }>
          {subTitle}
        </p>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: 'Card Title',
  featureImage: 'https://unsplash.it/200/300'
};

Card.propTypes = {
  title: PT.string.isRequired,
  subTitle: PT.string,
  featureImage: PT.string
};

export default Card;
