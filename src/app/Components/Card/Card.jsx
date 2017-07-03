import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';

import Tag from '../Tag/Tag';

import '../../../styles/main.scss';
import s from './Card.scss';

const renderMedia = (mediaPath) => {
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

const Card = ({
  title,
  subTitle,
  featureImage,
  utilData,
  children,
  utilTheme
}) => {
  const style = classNames(s.card, featureImage ? s.mediaIncluded : null);

  const renderUtil = (content) => {
    if (!content) {
      return null;
    }

    return (
      <div className={ s.util }>
        <Tag theme={ utilTheme }>{content}</Tag>
      </div>
    );
  };

  return (
    <div className={ style }>
      {renderMedia(featureImage)}
      <div className={ s.meta } />
      <div className={ s.body }>
        <div className={ s.heading }>
          <h3 className={ s.title }>
            {title}
          </h3>
          <p className={ classNames(s.subTitle, 'lead') }>
            {subTitle}
          </p>
        </div>
        {renderUtil(utilData)}
      </div>
      <div className={ s.copyContainer }>
        {children}
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: 'Card Title',
  utilTheme: 'blue'
};

Card.propTypes = {
  title: PT.string.isRequired,
  subTitle: PT.string,
  featureImage: PT.string,
  utilData: PT.string,
  utilTheme: PT.string,
  children: PT.any
};

export default Card;
