import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    authButtons = () => {
        return(
            <div>
                <li>
                    <Link to="/auth">SIGNUP</Link>
                </li>
            </div>
        );
    }

    render() {
        return(
            <nav>
                <div>
                    <Link to="/">HOME</Link>
                    <ul>
                        { this.authButtons() }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;