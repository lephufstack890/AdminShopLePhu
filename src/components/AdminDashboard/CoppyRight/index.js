import React, { Component } from "react";
import { mergeClasses, withStyles } from "@material-ui/styles";
import styles from './styles'

class CoppyRight extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.copyrights}>
                <p className={classes.copyrightText}>© 2022 N5QPT. All Rights Reserved Design LVP </p>
            </div>
        )
    }
}

export default withStyles(styles)(CoppyRight);