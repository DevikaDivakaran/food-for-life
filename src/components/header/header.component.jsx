import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
const Header = ({ currentUser, hidden }) => (    
<div className = "header" >
      <div className='logo-container'>
        <Link  to='/'>
            <Logo className='logo' />
        </Link>
      </div>


      {currentUser ? (
        <Link className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </Link>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
);
const mapStateToProps = ({ user: { currentUser }}) => ({
  currentUser
});

export default connect(mapStateToProps)(Header);