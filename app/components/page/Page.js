import React, {Component} from 'react';
import Header from "./Header";
import {Link, withRouter} from "react-router-dom";

class Page extends React.Component{
    constructor(props){
        super(props);

        this.state={};
    }

    render(){
        return( 
            <div className="bg-img h-100">
                <Header history={this.props.history} user={this.props.user}/>
                <div style={{height: "calc(100% - 60px)", overflow:"auto"}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default withRouter(Page)