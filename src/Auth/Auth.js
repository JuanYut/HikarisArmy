import React, {Component} from 'react'
import firebase from 'firebase'


class auth extends Component{
    constructor(){
        super();
        this.state = {
            user:null
        };

        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user:user 
            });
        });
    }

    handleAuth(){
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log (`Error ${error.code}: ${error.message}`));
    }
    handleLogout(){
        firebase.auth().signOut()
        .then(result => console.log(`${result.user.email} ha cerrado sesión`))
        .catch(error => console.log (`Error ${error.code}: ${error.message}`));
    }


    renderLoginButton(){
        if(this.state.user){
            return(
                <div> 
                   <p> Hola {this.state.user.displayName}</p>
                   <button onClick ={this.handleLogout}>Salir </button>
                </div>
            );
        }else{
            return(
            <button onClick = {this.handleAuth} type="submit">Login</button>
            );
        }
    }

    render(){
        return(
            <p> 
                {this.renderLoginButton()} 
            </p>   
        )
    }
}

export default auth;