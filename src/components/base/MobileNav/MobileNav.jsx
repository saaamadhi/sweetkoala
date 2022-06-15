import React from 'react';
import { bool, func, number } from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import styles from './mobileNav.css';

const MobileNav = ({ showMenu, setShowMenu, isAuth }) => {
  const { nav, menu_nav, menu_nav__item, menu_nav__link, mobile_nav } = styles;

  return (
    <nav className={classNames(nav, { [open]: showMenu })}>
      <ul className={classNames(menu_nav, { [open]: showMenu })}>
        <li className={classNames(menu_nav__item, { [open]: showMenu })}>
          <NavLink
            to="/"
            className={menu_nav__link}
            onClick={() => {
              setShowMenu(!showMenu);
            }}>
            <FormattedMessage id="global.catalog" />
          </NavLink>
        </li>
        <li className={classNames(menu_nav__item, { [open]: showMenu })}>
          <NavLink
            to="/delivery"
            className={menu_nav__link}
            onClick={() => {
              setShowMenu(!showMenu);
            }}>
            <FormattedMessage id="global.delivery" />
          </NavLink>
        </li>
        <li className={classNames(menu_nav__item, { [open]: showMenu })}>
          <NavLink
            to="/about"
            className={menu_nav__link}
            onClick={() => {
              setShowMenu(!showMenu);
            }}>
            <FormattedMessage id="global.about" />
          </NavLink>
        </li>
        <li className={classNames(menu_nav__item, { [open]: showMenu })}>
          <NavLink
            to="/help"
            className={menu_nav__link}
            onClick={() => {
              setShowMenu(!showMenu);
            }}>
            <FormattedMessage id="global.help" />
          </NavLink>
        </li>
        {!isAuth ? (
          <li
            className={classNames(
              menu_nav__item,
              { [open]: showMenu },
              mobile_nav
            )}>
            <NavLink
              to="/login"
              className={menu_nav__link}
              onClick={() => {
                setShowMenu(!showMenu);
              }}>
              <FormattedMessage id="login" />
            </NavLink>
          </li>
        ) : (
          <li
            className={classNames(
              menu_nav__item,
              { [open]: showMenu },
              mobile_nav
            )}>
            <NavLink
              to="/account"
              className={menu_nav__link}
              onClick={() => {
                setShowMenu(!showMenu);
              }}>
              <FormattedMessage id="global.account" />
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

MobileNav.propTypes = {
  showMenu: bool,
  setShowMenu: func,
  isAuth: number,
};

export default MobileNav;
