import React, { Component } from "react";
import styles from './styles'
import { withStyles } from "@material-ui/styles";
import Ipad from './Ipad.mp4'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { reduxForm } from "redux-form";
import * as loginAdminActions from './../../action/LoginAdmin'
import { Redirect } from "react-router-dom";
import * as loadingUserAdminActions from './../../action/LoadingUserAdmin'
class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            errorUsername: "",
            errorPassword: ""
        }
    }

    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }

    handleLogin = () => {
        const { loginAdminActionCreators, loadingUserAdminActionCreators } = this.props
        const { checkLoginAdmin } = loginAdminActionCreators
        const { showLoading } = loadingUserAdminActionCreators
        const { username, password } = this.state
        const { Check } = this.props
        var A = document.forms["myForm"]["username"].value;
        var B = document.forms["myForm"]["password"].value;
        if (A == "") {
            this.setState({
                errorUsername: 'Không được bỏ trống tên đăng nhập!'
            })
        }
        if (B == "") {
            this.setState({
                errorPassword: 'Không được bỏ trống mật khẩu!'
            })
        }
        if (A != "" && B != "") {
            if (username == Check[0].username && password == Check[0].password) {
                localStorage.setItem('user', JSON.stringify({
                    username: username,
                    password: password
                }))
            }
        }
    }
    render() {
        const { classes, handleSubmit, loadingUserAdminActionCreators } = this.props
        const { showLoading } = loadingUserAdminActionCreators
        const { errorUsername, errorPassword } = this.state
        var successUser = localStorage.getItem('user')
        if(successUser !== null){
            return <Redirect to='dashboard' />
            // console.log('yêu');
        }
        return (
            <div data-vide-bg={Ipad}>
                <div className={classes.centerContainer}>
                    {/*header*/}
                    <div className={classes.headerW3l}>
                        <h1 className={classes.headerW3lh1}>SHOP LÊ PHÚ</h1>
                    </div>
                    {/*//header*/}
                    <div className={classes.mainAcontentAgile}>
                        <div className={classes.subMainW3}>
                            <div className={classes.wthreePro}>
                                <h2 style={{ textAlign: 'center', fontFamily: 'math' }}>Đăng nhập</h2>
                            </div>
                            <form onSubmit={handleSubmit(this.handleLogin)} name="myForm">
                                <input onChange={this.onChange} placeholder="Tài khoản" name="username" className={classes.subMainW3Email} type="text" required />
                                <span className={classes.icon1}><i style={{ transform: 'translateX(10px)' }} className="fa fa-user" aria-hidden="true" /></span><br /><br />
                                <p style={{ color: 'red', fontWeight: 'bold' }}>{errorUsername}</p>
                                <input onChange={this.onChange} placeholder="Mật khẩu" name="password" className={classes.subMainW3Pasword} type="password" required />
                                <span className={classes.icon2}><i style={{ transform: 'translateX(10px)' }} className="fa fa-unlock" aria-hidden="true" /></span><br />
                                <p style={{ color: 'red', fontWeight: 'bold' }}>{errorPassword}</p>
                                <div className={classes.subW3l}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h6><a href='http://localhost:3001/admin/forgot' style={{ textDecoration: 'none', color: 'white' }} className={classes.subMainW3h6a}>Quên mật khẩu?</a></h6>
                                        <h6><a href='http://localhost:3001/admin/signup' style={{ textDecoration: 'none', color: 'white' }} className={classes.subMainW3h6a}>Đăng ký</a></h6>
                                    </div>
                                    <div className={classes.rightW3l}>
                                        <button type="submit" className={classes.subMainW3Submit}>Đăng nhập</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/*//main*/}
                    {/*footer*/}
                    <div className={classes.footer}>
                        <p className={classes.footerP}>© Design by <a href="" style={{ color: 'red' }}>ShopLePhu</a></p>
                    </div>
                    {/*//footer*/}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        Check: state.loginAdmin.listUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginAdminActionCreators: bindActionCreators(loginAdminActions, dispatch),
        loadingUserAdminActionCreators: bindActionCreators(loadingUserAdminActions, dispatch)
    }
}

const FORM_NAME = 'CAT_MANAGEMENT'
const withReduxForm = reduxForm({
    form: FORM_NAME
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm
)(LoginPage)