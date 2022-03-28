import React, {Component} from "react";
import styles from './styles'
import { withStyles } from "@material-ui/styles";
import LoadingIcon from './../../../assets/images/loading.gif'
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as loadingUserAdminActions from './../../../action/LoadingUserAdmin'
class GlobalLoading extends Component {
    render() {
        const { classes, showLoading } = this.props
        let xhtml
        if(showLoading){
            xhtml = (
                <div className={classes.globalLoading}>
                    <img src={LoadingIcon} alt="loading" className={classes.icon} />
                </div>
            )
        }
        return xhtml;
    }
}

const mapStateToProps = state => {
    return {
        showLoading: state.loadingUserAdmin.showLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadingUserAdminActionCreators: bindActionCreators(loadingUserAdminActions, dispatch)
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
    withStyles(styles),
    withConnect
)(GlobalLoading)