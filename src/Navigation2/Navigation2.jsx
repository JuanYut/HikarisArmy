import React, {Fragment, Component} from 'react'
import logo from '../gasstation1.png';
import './Navigation2.css'
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
                <nav className="navbar">
                    <ul className="nav" id="primary-nav">
                        <h1 className="logo">Gas_Station_Report_Colima</h1>
                        <div>
                            <img className="logoHikari" src={logo}/>
                        </div>
                        <Auth setUserData={this.setUserData} />
                        {/* <button className="nav-item" type="button" onClick={<Auth setUserData={this.setUserData} />}> Login </button> */}
                        
                        
                    </ul>
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
//<li className="nav-item"><a href="">Login</a></li>