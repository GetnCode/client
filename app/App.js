import  React,{  Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    withRouter
  } from "react-router-dom";

import Dashboard from "./pages/Dashboard";


import Settings from "./pages/Settings";

import Users from "./pages/Users";
import Login from "./pages/Login";
import AuthModel from "./objects/AuthModel";
import UserModel from "./objects/User";

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            user:{},
            isAuthorized:false,
            loading:true,
            token:sessionStorage.getItem('token'),
            id:sessionStorage.getItem('id')
        };

        this.setUser = this.setUser.bind(this);
    }

    componentDidUpdate(){
        console.log(this.state.token);
    }

    componentDidMount(){
       //rebuild state after refresh
        if( this.state.token === null){
            this.props.history.push("/login");
        }
        else{
            var um = new UserModel();
            um.getById(
                this.state.id, 
                this.state.token 
            ).then(response => {
                this.setState({
                    user:response,
                    isAuthorized:true,
                });
            });
        }
    }


    setUser(user){
        sessionStorage.setItem('token', user.token);
        sessionStorage.setItem('id', user.id);
        this.setState({user:user, isAuthorized:true, token:user.token, id:user.id});
    }

    render(){

        return(
            <div className="h-100">
               
                <Switch>
                    <Route  path="/login"  render={(props) => <Login {...props} isAuthed={this.state.isAuthorized} setUser={this.setUser} />}/>
                    <Route  path="/users"  render={(props) => <Users {...props} user={this.state.user} isAuthed={this.state.isAuthorized} />}/>
                  
                    <Route  path="/settings"  render={(props) => <Settings {...props} user={this.state.user} isAuthed={this.state.isAuthorized} />}/>
                    <Route  path="/apps"  render={(props) => <Apps {...props} user={this.state.user} isAuthed={this.state.isAuthorized} />}/>
                    <Route  path="/"  render={(props) => <Dashboard {...props} user={this.state.user} isAuthed={this.state.isAuthorized} />}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
