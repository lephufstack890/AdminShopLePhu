import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles'
import in4 from './../../../../assets/images/in4.jpg'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class ListSlider extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <ol className={classes.breadcrumb}>
                    <li className={classes.breadcrumbItem}><a href="#" style={{ color: '#fff', textDecoration: 'none' }} className={classes.breadcumbText}>
                        Trang chủ
                        <ArrowForwardIosIcon className={classes.icon} />
                        <span className={classes.textRed}>Danh sách slider</span>
                    </a>
                    </li>
                </ol>
                <div className={classes.sliders}>
                    <h2 className={classes.update}>Danh sách slider</h2>
                    <table className={classes.table} style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th className={classes.thead} style={{ textAlign: 'center' }}>Ảnh</th>
                                <th className={classes.thead} style={{ textAlign: 'center' }}>Ngày tạo</th>
                                <th className={classes.thead} style={{ textAlign: 'center' }}>Tác vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={classes.info} style={{ textAlign: 'center' }}>
                                <td className={classes.tbody}>1</td>
                                <td className={classes.tbody}>
                                    <img src={in4} alt="anh" />
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <span>
                                        <a className="agile-icon" href="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-pencil-square-o" /></a>
                                    </span>
                                    <span>
                                        <a className="agile-icon" href="#" data-toggle="modal" data-target="#myModal1"><i className="fa fa-times-circle" /></a>
                                    </span>
                                </td>
                            </tr>
                            <tr className={classes.info} style={{ textAlign: 'center' }}>
                                <td className={classes.tbody}>2</td>
                                <td className={classes.tbody}>
                                    <img src={in4} alt="anh" />
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <span>
                                        <a className="agile-icon" href="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-pencil-square-o" /></a>
                                    </span>
                                    <span>
                                        <a className="agile-icon" href="#" data-toggle="modal" data-target="#myModal1"><i className="fa fa-times-circle" /></a>
                                    </span>
                                </td>
                            </tr>
                            <tr className={classes.info} style={{ textAlign: 'center' }}>
                                <td className={classes.tbody}>3</td>
                                <td className={classes.tbody}>
                                    <img src={in4} alt="anh" />
                                </td>
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

export default withStyles(styles)(ListSlider);