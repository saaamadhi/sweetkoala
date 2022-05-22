import { useState } from 'react';
import { TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import MobileNav from '../MobileNav';
import notifications from '../../../shared/assets/notifications.svg';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../../shared/assets/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import styles from './header.css';
import { store } from '../../../redux/store';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchText, setSearchText] = useState('');

  const state = store.getState();
  const isAuth = state?.user?.token?.length;

  const intl = useIntl();

  const {
    header,
    actions_desktop,
    search,
    search_icon,
    actions_search_icon,
    account_dropdown_content,
    account_dropdown,
    btn__avatar_icon,
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
    fixed_body,
  } = styles;

  const handleClickOnMenu = () => {
    document.body.style.overflow = !showMenu ? 'hidden' : 'visible';
    setShowMenu(!showMenu);
  };

  return (
    <header className={header}>
      <div className={menu_container__inner}>
        <div className={menu_btn} onClick={handleClickOnMenu}>
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
      <MobileNav
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        isAuth={isAuth}
      />
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
        <div className={account_dropdown}>
          <button className={btn__avatar_icon} type="button">
            <PersonIcon className={avatar_icon} />
          </button>
          <div className={account_dropdown_content}>
            {isAuth ? (
              <NavLink to="/login">
                {intl.formatMessage({ id: 'login' })}
              </NavLink>
            ) : (
              <NavLink to="/account">
                {intl.formatMessage({ id: 'global.account' })}
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
