import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from './styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import avatar from './../../../assets/images/in4.jpg'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './../Header/styles.css'
import { Redirect } from "react-router-dom";
const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            mobileMoreAnchorEl: null,
        }
    }

    handleProfileMenuOpen = e => {
        this.setState({
            anchorEl: e.currentTarget
        })
    }

    handleMobileMenuOpen = e => {
        this.setState({
            mobileMoreAnchorEl: e.currentTarget
        })
    }
    renderMobileMenu = () => {
        const { mobileMoreAnchorEl } = this.state;
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={this.handleMobileMenuClose}
        >
            <MenuItem onClick={this.handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    }
    renderMenu = () => {
        const { anchorEl } = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        let xhtml = null;
        if (anchorEl) {
            xhtml = (
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    id={menuId}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMenuOpen}
                    onClose={this.handleMenuClose}
                >
                    <MenuItem onClick={this.handleMenuClose} className={classes.dropdownItem}>
                        Cài đặt
                        <SettingsIcon />
                    </MenuItem>
                    <MenuItem onClick={this.handleMenuClose} className={classes.dropdownItem}>
                        Thông tin
                        <PersonIcon />
                    </MenuItem>
                    <MenuItem onClick={this.handleMenuClose} className={classes.dropdownItem}>
                        Đăng xuất
                        <ExitToAppIcon />
                    </MenuItem>
                </Menu>
            )
        }
        return xhtml;
    }

    handleMobileMenuClose = () => {
        console.log('handleMobileMenuClose');
    }

    handleMenuClose = () => {
        this.setState({
            anchorEl: null
        })
        var removeUser = localStorage.getItem('user')
        localStorage.clear(removeUser)
        // console.log(localStorage.removeItem(removeUser));
    }

    handleMobileMenuClose = () => {
        console.log('Yeu em');
    };

    handleToggleSidebar = () => {
        const { showSidebar, onToggleSidebar } = this.props;
        if (onToggleSidebar) {
            onToggleSidebar(!showSidebar);
        }
    }

    render() {
        const { classes, name } = this.props
        var logoutUser = localStorage.getItem('user')
        if(logoutUser == null){
            return <Redirect to='login' />
        }
        return (
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleToggleSidebar}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            {name}
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <div className={classes.backgroundAdmin}>
                                <ul
                                    className={classes.listStyle}
                                    onClick={this.handleProfileMenuOpen}
                                >
                                    <li className={classes.dropdownProfile}>
                                        <a href="#" className={classes.dropdownToggle}>
                                            <div className={classes.profileImg}>
                                                <span className={classes.prflImg}>
                                                    <img src={avatar} alt="admin" className={classes.avatar} />
                                                </span>
                                                <div className={classes.username}>
                                                    <p className={classes.infomation}>Thông tin</p>
                                                    <span className={classes.admin}>Lê Phú</span>
                                                </div>
                                                <KeyboardArrowDownIcon
                                                    className={classes.IconAvatar}
                                                    edge="end"
                                                    aria-label="account of current user"
                                                    aria-controls={menuId}
                                                    aria-haspopup="true"
                                                    onClick={this.handleProfileMenuOpen}
                                                    color="inherit"
                                                />
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={this.handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {this.renderMobileMenu()}
                {this.renderMenu()}
            </div>
        );
    }
}

export default withStyles(styles)(Header);