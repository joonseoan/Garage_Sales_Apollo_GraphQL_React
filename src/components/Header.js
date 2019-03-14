import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import mutation from '../mutations/Logout';
import currentUser from '../queries/currentUser';

class Header extends React.Component {

    state={ logout: false };

    // not put 'aysnc' funcition 
    handleLogout = (e) => {
        // no return.
        this.props.mutate({})
        .then(() => {
            this.props.data.refetch();         
        })
        .catch(e => {throw new Error ('Failed to Logout'); });
  
    }

    authButtons = () => {
       
        const { user, loading } = this.props.data;
        
        if(loading) return <div />;
      
        if(user) {    
            return(
                <div>
                    <li>
                        <div onClick={ this.handleLogout }>LOGOUT</div>
                    </li>
                </div>
            );
        } else {
            return(
                <div>
                    <li>
                        <Link to={{
                            pathname: '/auth',
                            state: 'signup'
                        }}>SIGNUP</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname: '/auth',
                            state: 'login'
                        }}>LOGIN</Link>
                    </li>
                </div>
            );
        }
    }

    render() {        
        
        // Just because return value shows up together with buttons above.
        if(this.props.data.loading) return <div />
        
        return(
            <nav>
                <div>
                    <ul>
                        <Link to="/">Home</Link>
                        { this.authButtons() }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default graphql(mutation)(
    graphql(currentUser)(Header)
);
