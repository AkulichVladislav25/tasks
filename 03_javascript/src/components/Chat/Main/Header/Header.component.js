import React, { PureComponent as Component } from 'react';
import './Header.styles.css';

class Header extends Component {
    render() {
        const { isDialog, name, unread } = this.props;

        return ( 
            <header className = "header" >
            <h1 className = { isDialog ? "header__back-button" : "header__title" } > { name } </h1> 
            <figure className = { isDialog ? "header__title" : "header__unread" } > {unread} </figure> 
            </header>
        );
    }
};

export default Header;