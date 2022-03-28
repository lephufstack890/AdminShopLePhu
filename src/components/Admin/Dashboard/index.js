import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom";

class Dashboard extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <ol className={classes.breadcrumb}>
                    <li className={classes.breadcrumbItem}><a href="#" style={{ color: '#fff', textDecoration: 'none' }} className={classes.breadcumbText}>
                        Trang chủ
                        <ArrowForwardIosIcon className={classes.icon} />
                        <span className={classes.textRed}></span>
                    </a>
                    </li>
                </ol>
                <div className="w3l-table-info">
                    <h2 classname={classes.addText} style={{ color: 'blue' }}>Danh mục chức năng của admin</h2>
                    <div className="row">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className={classes.listGroup}>
                                <Link to="/admin.dashboard" className="list-group-item active">Trang
                                    chủ</Link>
                                <Link to="/admin/manageProduct" className="list-group-item">Quản lý sản
                                    phẩm</Link>
                                <Link to="/admin/listUser" className="list-group-item">Quản lý thành viên
                                    phẩm</Link>
                                <Link to="/admin/listSlider" className="list-group-item">Quản lý Slider</Link>
                                <Link to="/admin/order" className="list-group-item">Quản lý đơn
                                    hàng</Link>
                            </div>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Dashboard);