import React from 'react';
import Navigation from './Navigation';
import LoginForm from './LoginForm';


export default class Homepage extends React.Component {
    render() {
        return (
            <div className='container'>
                <Navigation />
                <br></br>
                <LoginForm />
            </div>
        )
    }
}