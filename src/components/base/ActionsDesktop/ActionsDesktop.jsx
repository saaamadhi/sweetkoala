import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { number } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { ActionCreators } from '../../../redux/actions/actionCreators';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './actionsDesktop.css';

const ActionsDesktop = ({ isAuth }) => {
  const {
    actions_desktop,
    shopping_cart_icon,
    account_dropdown,
    btn__avatar_icon,
    avatar_icon,
    account_dropdown_content,
  } = styles;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnCartClick = () => {
    navigate('/cart');
  };

  const handleLogout = () => {
    dispatch(ActionCreators.removeAuthToken());
    dispatch(ActionCreators.removeUserRole());
    navigate('/');
  };

  return (
    <div className={actions_desktop}>
      <ShoppingCartIcon
        className={shopping_cart_icon}
        onClick={handleOnCartClick}
      />
      <div className={account_dropdown}>
        <button className={btn__avatar_icon} type="button">
          <PersonIcon className={avatar_icon} />
        </button>
        <div className={account_dropdown_content}>
          {isAuth ? (
            <React.Fragment>
              <NavLink to="/account">
                <FormattedMessage id="global.account" />
              </NavLink>
              <NavLink to="/saved-list">
                <FormattedMessage id="wishList" />
              </NavLink>
              <NavLink to="/#" onClick={handleLogout}>
                <FormattedMessage id="global.logout" />
              </NavLink>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <NavLink to="/saved-list">
                <FormattedMessage id="wishList" />
              </NavLink>
              <NavLink to="/login">
                <FormattedMessage id="login" />
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionsDesktop;

ActionsDesktop.propTypes = {
  isAuth: number,
};
