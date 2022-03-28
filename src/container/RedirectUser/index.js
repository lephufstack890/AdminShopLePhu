import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class RedirectUser extends Component {
    render(){
        return (
            <Redirect to='/admin/login' />
        )
    }
}

export default RedirectUser;