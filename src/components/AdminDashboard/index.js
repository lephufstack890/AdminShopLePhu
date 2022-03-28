import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles'
import Header from './../../components/AdminDashboard/Header'
import Sidebar from './../../components/AdminDashboard/Sidebar'
import CoppyRight from './../../components/AdminDashboard/CoppyRight'
class AdminDashboard extends Component {
    render() {
        const { children, classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <Header />
                <Sidebar />
                <div className={classes.Content}>
                    {children}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AdminDashboard);