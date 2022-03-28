import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from './styles'
import { ThemeProvider } from "@material-ui/core";
import theme from './../../commons/index'
import { Switch } from "react-router-dom";
import { ROUTES_ADMIN, ROUTES } from "../../constants/index";
import AdminLayoutRoute from './../../commons/layout/AdminLayoutRoute'
import DefaultLayoutRoute from './../../commons/layout/DefaultLayoutRoute'
import BrowserRouter from "react-router-dom/BrowserRouter";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
    renderAdmin = () => {
        let xhtml = null;
        xhtml = (
            ROUTES_ADMIN.map(route => {
                return (
                    <AdminLayoutRoute
                        key={route.path}
                        name={route.name}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                )
            })
        )
        return xhtml;
    }

    renderUserAdmin = () => {
        let xhtml = null;
        xhtml = (
            ROUTES.map(route => {
                return (
                    <DefaultLayoutRoute
                        key={route.path}
                        name={route.name}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                )
            })
        )
        return xhtml;
    }

    render() {
        return (

            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <ToastContainer />
                    <Switch>
                        {this.renderAdmin()}
                        {this.renderUserAdmin()}
                    </Switch>
                </ThemeProvider>
            </BrowserRouter>
        );
    }
}
export default withStyles(styles)(App);
