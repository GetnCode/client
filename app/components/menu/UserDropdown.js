import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Menu from "../../objects/Menu";
import {Link, withRouter} from "react-router-dom";

 

class UserDropdown extends React.Component {

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        console.log(this.props.history);
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('token');
        this.props.history.push({pathname:"/login"});
    }

    render(){


        return (
            <UncontrolledDropdown className={this.props.className}>
                <DropdownToggle className="text-white d-flex align-items-center" size="sm" color="link" caret>
                    <i className="fa fas fa-user-circle mr-2 fa-2x"></i> {this.props.username}
                </DropdownToggle>
                <DropdownMenu className="bg-white border-left border-top border-right shadow p-4" right>
                    <div style={{width: "200px", borderRadius: "0.25rem"}}>
                        <Link className="d-block border-bottom w-100 p-3 small" to="/account">
                            <i className="fa fas fa-user mr-2"></i> Account
                        </Link>
                        <a className="d-block w-100 p-3 small" onClick={this.logout}>
                            <i className="fa fas fa-sign-out-alt mr-2"></i> Logout
                        </a>
                    </div>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

}
export default withRouter(UserDropdown)