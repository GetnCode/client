import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

import UserForm from "./UserForm";

export default
class UserDeleteModal extends React.Component{
    constructor(props){
        super(props);

        this.state={};
    }

    render(){
        return( 
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalBody className="bg-white rounded p-5 shadow">
                    <div className=" row m-0 align-items-center  mb-4">
                        <h5 className="font-weight-bold mb-0 text-primary">Are you sure?</h5>
                        <Button color="secondary" className="ml-auto" size="sm" onClick={this.props.toggle}><i className="fa fas fa-times"></i></Button>
                    </div>
                    <div className="p-4 border bg-light rounded mb-4">
                        <p className="small text-muted m-0">If you delete this user they will not be able to be recovered.</p>
                    </div>
                    <Button block className="py-2" size="sm" color="primary" onClick={this.props.onClick}>Delete User</Button>             
                </ModalBody>
            </Modal>
        );
    }
}