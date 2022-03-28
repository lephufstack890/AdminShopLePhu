import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class ListUser extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <ol className={classes.breadcrumb}>
                    <li className={classes.breadcrumbItem}><a href="#" style={{ color: '#fff', textDecoration: 'none' }} className={classes.breadcumbText}>
                        Trang chủ
                        <ArrowForwardIosIcon className={classes.icon} />
                        <span className={classes.textRed}>Danh sách thành viên</span>
                    </a>
                    </li>
                </ol>
                <div className={classes.users}>
                    <h2 className={classes.update}>Danh sách thành viên</h2>
                    <table className={classes.table} style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th className={classes.thead} style={{ textAlign: 'center' }}>STT</th>
                                <th className={classes.thead} style={{ textAlign: 'center' }}>Họ tên</th>
                                <th className={classes.thead} style={{ textAlign: 'center' }}>Email</th>
                                <th className={classes.thead} style={{ textAlign: 'center' }}>Ngày tạo</th>
                                <th className={classes.thead} style={{ textAlign: 'center' }}>Tác vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={classes.info}>
                                <td className={classes.tbody}>1</td>
                                <td className={classes.tbody}>Lê Văn Phú</td>
                                <td className={classes.tbody}>phu@gmail.com</td>
                                <td className={classes.tbody}>13/3/2002</td>
                                <td style={{ textAlign: 'center' }}>
                                    <span>
                                        <a className="agile-icon" href="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-pencil-square-o" /></a>
                                    </span>
                                    <span>
                                        <a className="agile-icon" href="#" data-toggle="modal" data-target="#myModal1"><i className="fa fa-times-circle" /></a>
                                    </span>
                                </td>
                            </tr>
                            <tr className={classes.info}>
                                <td className={classes.tbody}>2</td>
                                <td className={classes.tbody}>Laptop ASUS VivoBook</td>
                                <td className={classes.tbody}>Học tập văn phòng</td>
                                <td className={classes.tbody}>ASUS</td>
                                <td style={{ textAlign: 'center' }}>
                                    <span>
                                        <a className="agile-icon" href="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-pencil-square-o" /></a>
                                    </span>
                                    <span>
                                        <a className="agile-icon" href="#" data-toggle="modal" data-target="#myModal1"><i className="fa fa-times-circle" /></a>
                                    </span>
                                </td>
                            </tr>
                            <tr className={classes.info}>
                                <td className={classes.tbody}>3</td>
                                <td className={classes.tbody}>Laptop ASUS VivoBook</td>
                                <td className={classes.tbody}>Học tập văn phòng</td>
                                <td className={classes.tbody}>ASUS</td>
                                <td style={{ textAlign: 'center' }}>
                                    <span>
                                        <a className="agile-icon" href="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-pencil-square-o" /></a>
                                    </span>
                                    <span>
                                        <a className="agile-icon" href="#" data-toggle="modal" data-target="#myModal1"><i className="fa fa-times-circle" /></a>
                                    </span>
                                </td>
                            </tr>
                            <tr className={classes.info}>
                                <td className={classes.tbody}>4</td>
                                <td className={classes.tbody}>Laptop ASUS VivoBook</td>
                                <td className={classes.tbody}>Học tập văn phòng</td>
                                <td className={classes.tbody}>ASUS</td>
                                <td style={{ textAlign: 'center' }}>
                                    <span>
                                        <a className="agile-icon" href="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-pencil-square-o" /></a>
                                    </span>
                                    <span>
                                        <a className="agile-icon" href="#" data-toggle="modal" data-target="#myModal1"><i className="fa fa-times-circle" /></a>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ListUser);