import React, { Component } from "react";
import styles from './styles'
import { withStyles } from "@material-ui/styles";
import Ipad from './Ipad.mp4'
import { Link } from "react-router-dom";
class ForgotPage extends Component {
    render() {
        const { classes } = this.props
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
                                <h2 style={{textAlign: 'center', fontFamily: 'math'}}>Lấy lại mật khẩu</h2>
                            </div>
                            <form action="#" method="post">
                                <input placeholder="Email" name="email" className={classes.subMainW3Email} type="email" required />
                                <div className={classes.subW3l}>
                                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                                        <h6><a href='http://localhost:3001/admin/login' style={{ textDecoration: 'none', color: 'white' }} className={classes.subMainW3h6a}>Đăng nhập</a></h6>
                                    </div>
                                    <div className={classes.rightW3l}>
                                        <input type="submit" value="Khôi phục" className={classes.subMainW3Submit} />
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

export default withStyles(styles)(ForgotPage)