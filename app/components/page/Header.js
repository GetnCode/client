import  React,{  Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Button
} from 'reactstrap';
import {Link, withRouter} from "react-router-dom";
import MenuDropdown from '../menu/MenuDropdown';
import UserDropdown from '../menu/UserDropdown';


class Header extends React.Component{

    constructor(props){
        super(props);
       
    }

    render(){
        return(
            <div>
                <Navbar className=" shadow-sm  position-relavent " color="primary" light expand="xs">
                    <Container>
                        <MenuDropdown />
                        <NavbarBrand href="/" className="text-white font-weight-bold ml-3">
                            code<span className="">me</span>
                        </NavbarBrand>
                        {this.props.user !== undefined ?
                            <UserDropdown history={this.props.history} className="ml-auto" username={this.props.user.username}/>
                        :null}
                    </Container>

                </Navbar>
            </div>
        );
    }
}

export default withRouter(Header);



