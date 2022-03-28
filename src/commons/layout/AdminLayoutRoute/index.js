import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles'
import { Route } from "react-router-dom";
import AdminDashboard from './../../../components/AdminDashboard'
class AdminLayoutRoute extends Component {
    render() {
        const { component: YourComponent, ...remainProps } = this.props;
        return (
            <Route
                {...remainProps}
                render={routeProps => {
                    return (
                        <AdminDashboard>
                            <YourComponent {...routeProps} />
                        </AdminDashboard>
                    )
                }}
            />
        )
    }
}

export default withStyles(styles)(AdminLayoutRoute);