import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class AddUser extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.user}>
                <ol className={classes.breadcrumb}>
                    <li className={classes.breadcrumbItem}>
                        <a href="#" className={classes.breadcumbText} style={{ color: '#fff', textDecoration: 'none' }}>
                        Trang chủ
                        <ArrowForwardIosIcon className={classes.icon} />
                        <span className={classes.textRed}>Thêm thành viên</span>
                    </a>
                    </li>
                </ol>
                <div className="w3l-table-info">
                    <h2 className={classes.addText}>Thêm thành viên</h2>
                    <div className={classes.addUser}>
                        <div className="row">
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <form action>
                                    <div className="form-group">
                                        <label htmlFor="name">Họ và Tên</label>
                                        <input type="text" className="form-control" id="ma" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="ten" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Mật khẩu</label>
                                        <input type="password" className="form-control" id="loai" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Xác nhập mật khẩu</label>
                                        <input type="password" className="form-control" id="nsx" />
                                    </div>
                                    <button type="submit" className="btn btn-default">Thêm mới</button>
                                </form>
                            </div>
                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AddUser);