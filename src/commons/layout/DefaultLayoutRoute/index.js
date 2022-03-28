import React, { Component } from "react";
import styles from './styles'
import { withStyles } from "@material-ui/styles";
import { Route } from "react-router-dom";

class DefaultLayoutRoute extends Component {
    render() {
        const { component: YourComponent, ...remainProps } = this.props;
        return (
            <Route
                {...remainProps}
                render={routeProps => {
                    return (
                        <YourComponent {...routeProps} />
                    )
                }}
            />
        )
    }
}

export default withStyles(styles)(DefaultLayoutRoute)