import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { TextField } from '@mui/material';
import classNames from 'classnames';
import notifications from '../../../shared/assets/notifications.svg';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../../shared/assets/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import styles from './header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchText, setSearchText] = useState('');

  const {
    header,
    actions_desktop,
    search,
    search_icon,
    actions_search_icon,
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
        <img className={menu_logo} src={logo} alt="logo" />
      </div>
      <div className={actions}>
        <SearchIcon className={loupe_icon} />
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
              <FormattedMessage id="global.delivery" />
            </a>
          </li>
          <li className={classNames(menu_nav__item, { [open]: showMenu })}>
            <a href="#" className={menu_nav__link}>
              <FormattedMessage id="global.contacts" />
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
      <div className={search}>
        <TextField
          id="search_input"
          type="input"
          variant="outlined"
          margin="normal"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <SearchIcon className={search_icon} />
      </div>
      <div className={actions_desktop}>
        <ShoppingCartIcon className={shopping_cart_icon} />
        <PersonIcon className={avatar_icon} />
      </div>
    </header>
  );
};

export default Header;
