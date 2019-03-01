/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import './Header.styles.css';

const Header = ({
  isDialog,
  name,
  unread,
  onBackButtonClick,
  conversationWith,
}) => (
  <header className="header">
    <h1
      className={
      isDialog ? 'header__back-button' : 'header__title'}
      onClick={isDialog ? onBackButtonClick : undefined}
    >
      {name}
    </h1>
    <figure className={isDialog ? 'header__title' : 'header__unread'}>
      {isDialog ? `with ${conversationWith}` : unread}
    </figure>
  </header>
);
Header.defaultProps = {
  unread: 0,
  conversationWith: '',
};
Header.propTypes = {
  isDialog: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  unread: PropTypes.number,
  onBackButtonClick: PropTypes.func.isRequired,
  conversationWith: PropTypes.string,
};

export default Header;
