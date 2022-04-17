import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import notifications from '../../shared/assets/notifications.svg';
import loupe from '../../shared/assets/loupe.svg';
import logo from '../../shared/assets/logo.svg';
import avatar from '../../shared/assets/avatar.svg';
import shopping_cart from '../../shared/assets/shopping_cart.svg';
import styles from './header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const {
    header,
    actions_desktop,
    menu_container__inner,
    menu_logo,
    menu_btn,
    menu_btn__burger,
    nav,
    menu_nav,
    menu_nav__item,
    menu_nav__link,
    open,
    actions,
    loupe_icon,
    avatar_icon,
    shopping_cart_icon,
  } = styles;

  return (
    <header className={header}>
      <div className={menu_container__inner}>
        <div className={menu_btn} onClick={() => setShowMenu(!showMenu)}>
          <span
            className={classNames(menu_btn__burger, {
              [open]: showMenu,
            })}></span>
        </div>
        <img className={menu_logo} src={logo} alt="logo"></img>
      </div>
      <div className={actions}>
        <img className={loupe_icon} src={loupe} alt="loupe" />
        <img src={notifications} alt="notifications" />
      </div>
      <nav className={classNames(nav, { [open]: showMenu })}>
        <ul className={classNames(menu_nav, { [open]: showMenu })}>
          <li className={classNames(menu_nav__item, { [open]: showMenu })}>
            <a href="#" className={menu_nav__link}>
              <FormattedMessage id="global.catalog" />
            </a>
          </li>
          <li className={classNames(menu_nav__item, { [open]: showMenu })}>
            <a href="#" className={menu_nav__link}>
              <FormattedMessage id="global.shops" />
            </a>
          </li>
          <li className={classNames(menu_nav__item, { [open]: showMenu })}>
            <a href="#" className={menu_nav__link}>
              <FormattedMessage id="global.delivery" />
            </a>
          </li>
          <li className={classNames(menu_nav__item, { [open]: showMenu })}>
            <a href="#" className={menu_nav__link}>
              <FormattedMessage id="global.about" />
            </a>
          </li>
          <li className={classNames(menu_nav__item, { [open]: showMenu })}>
            <a href="#" className={menu_nav__link}>
              <FormattedMessage id="global.help" />
            </a>
          </li>
        </ul>
      </nav>
      <div className={actions_desktop}>
        <img
          className={shopping_cart_icon}
          src={shopping_cart}
          alt="shopping_cart"
        />
        <img className={avatar_icon} src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
