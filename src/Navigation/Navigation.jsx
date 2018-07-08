import React, {Fragment, Component} from 'react'
import logo from '../gasstation1.png';
import './Navigation.css'
import Auth from '../Auth/Auth'
import ReportForm from '../ReportForm/ReportForm'

export default class Navigation extends Component  {
    state = {
        user: null,
    }

    setUserData = user => {
        this.setState({
            user: user,
        })
    };


    
    render() {
        const {props} = this;
        return (
            <Fragment>  
                <nav className="navbar navbar-dark bg-dark">
                <a  className="text-white">
                    { props.title }
                </a>
                <img src={logo} className="App-logo" alt="logo" />
                <Auth setUserData={this.setUserData} />
                </nav>
                { this.state.user &&
                    <div className="reportHeader">
                        <ReportForm addReport={props.addReport} />
                    </div>
                }
            </Fragment>
        )
    }
};
