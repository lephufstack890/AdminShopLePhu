import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from './styles'
import './../Sidebar/styles.css'
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import HomeIcon from '@material-ui/icons/Home';
import OrderIcon from '@material-ui/icons/BorderColor';
import ProductIcon from '@material-ui/icons/AddShoppingCart';
import AppsIcon from '@material-ui/icons/Apps';
import UserIcon from '@material-ui/icons/SupervisorAccount';
import SlideShowIcon from '@material-ui/icons/Tune';
import * as catActions from './../../../action/ManageCat'
import * as modalCatActions from './../../../action/ModalCat'
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            name: '',
            slug: ''
        }
    }
    toggleDrawer = value => {
        this.setState({
            open: value
        })
    }

    setForm = () => {
        const { catActionCreators, modalCatActionCreators, id } = this.props;
        const { changeModalCatTitle, changeModalCatButton, changeModalCatContent, toggleModalCat } = modalCatActionCreators;
        const { setCatEditing } = catActionCreators;
        setCatEditing('');
        changeModalCatTitle('Thêm danh mục');
        changeModalCatButton('Thêm mới');
    }

    render() {
        const { classes } = this.props;
        return (
            <div
                className="sidebar-menu"
                variant='persistent'
            >
                <header className="logo1">
                    <a href="#" className="sidebar-icon"> <span className="fa fa-bars" /> </a>
                </header>
                <div style={{ borderTop: '1px ridge rgba(255, 255, 255, 0.15)' }} />
                <div className="menu">
                    <ul id="menu">
                        <li>
                            <Link to="/admin/dashboard">
                                <HomeIcon className={classes.icon} />
                                <span>Trang chủ</span>
                                <div className="clearfix" />
                            </Link>
                        </li>
                        <li id="menu-academico"><Link to="/admin/order"><OrderIcon className={classes.icon} /><span>Đơn
                            hàng</span>
                            <div className="clearfix" />
                        </Link></li>
                        <li id="menu-academico"><Link to="/admin/manageCat" onClick={this.setForm}>
                            <OrderIcon className={classes.icon} />
                            <span>Quản lý danh mục</span>
                            <div className="clearfix" />
                        </Link></li>
                        <li id="menu-academico"><a href="#"><ProductIcon className={classes.icon} /><span>Sản
                            phẩm</span> <ArrowForwardIosIcon style={{ float: 'right', fontSize: 14, transform: 'translateY(92%)' }} />
                            <div className="clearfix" />
                        </a>
                            <ul id="menu-academico-sub">
                                <li
                                    id="menu-academico-avaliacoes"
                                >
                                    <Link to="/admin/manageProduct">
                                        Quản lý sản phẩm</Link>
                                </li>
                            </ul>
                        </li>
                        <li id="menu-academico"><a href="#"><UserIcon className={classes.icon} /><span>Thành viên
                        </span> <ArrowForwardIosIcon style={{ float: 'right', fontSize: 14, transform: 'translateY(92%)' }} />
                            <div className="clearfix" />
                        </a>
                            <ul id="menu-academico-sub">
                                <li id="menu-academico-avaliacoes"><Link to="/admin/addUser">Thêm thành viên</Link></li>
                                <li id="menu-academico-avaliacoes"><Link to="/admin/listUser">Danh sách thành viên</Link></li>
                            </ul>
                        </li>
                        <li id="menu-academico"><a href="#"><SlideShowIcon className={classes.icon} /><span>Cấu hình cửa hàng
                        </span> <ArrowForwardIosIcon style={{ float: 'right', fontSize: 14, transform: 'translateY(92%)' }} />
                            <div className="clearfix" />
                        </a>
                            <ul id="menu-academico-sub">
                                <li id="menu-academico-avaliacoes"><Link to="/admin/addSlider">Thêm Slide Show</Link></li>
                                <li id="menu-academico-avaliacoes"><Link to="/admin/listSlider">Danh sách Slide Show</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listCat: state.cat.listCat,
        open: state.modalCat.showModal
    }
}



const mapDispatchToProps = dispatch => {
    return {
        catActionCreators: bindActionCreators(catActions, dispatch),
        modalCatActionCreators: bindActionCreators(modalCatActions, dispatch)
    }
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect
)(Sidebar);