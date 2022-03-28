import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import EditIcon from '@material-ui/icons/Edit';
class Order extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.order}>
                <ol className={classes.breadcrumb}>
                    <li className={classes.breadcrumbItem}><a href="#" style={{ color: '#fff', textDecoration: 'none' }} className={classes.breadcumbText}>
                        Trang chủ
                        <ArrowForwardIosIcon className={classes.icon} />
                        <span className={classes.textRed}>Đơn hàng</span>
                    </a>
                    </li>
                </ol>
                <div className={classes.listOrder}>
                    <h2 className={classes.listOrderText}>Danh sách đơn hàng</h2>
                    <div style={{ textAlign: '-webkit-center' }}>
                        <table className={classes.table}>
                            <thead>
                                <tr>
                                    <th className={classes.thead}>Mã đơn hàng</th>
                                    <th className={classes.thead}>Tên khách hàng</th>
                                    <th className={classes.thead}>Địa chỉ</th>
                                    <th className={classes.thead}>Số điện thoại</th>
                                    <th className={classes.thead}>Ngày lập</th>
                                    <th className={classes.thead}>Tình trạng</th>
                                    <th className={classes.thead}>Tác vụ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={classes.success}>
                                    <td className={classes.tbody}>1</td>
                                    <td className={classes.tbody}>Trần Văn Hùng</td>
                                    <td className={classes.tbody}>83, An Dương Vương, P4, Q5</td>
                                    <td className={classes.tbody}>09047383221</td>
                                    <td className={classes.tbody}>17/05/2018</td>
                                    <td className={classes.tbody}>Chưa giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.info}>
                                    <td className={classes.tbody}>2</td>
                                    <td className={classes.tbody}>Trần Hạnh</td>
                                    <td className={classes.tbody}>1, Nguyễn Thị Minh Khai, P4, Q5</td>
                                    <td className={classes.tbody}>09047383221</td>
                                    <td className={classes.tbody}>07/05/2018</td>
                                    <td className={classes.tbody}>Chưa giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.success}>
                                    <td className={classes.tbody}>3</td>
                                    <td className={classes.tbody}>Nguyễn Long</td>
                                    <td className={classes.tbody}>234, An Dương Vương, P4, Q5</td>
                                    <td className={classes.tbody}>09047383221</td>
                                    <td className={classes.tbody}>02/05/2018</td>
                                    <td className={classes.tbody}>Đang giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.info}>
                                    <td className={classes.tbody}>4</td>
                                    <td className={classes.tbody}>Trần Thị Hà</td>
                                    <td className={classes.tbody}>12, Trần Phú, P4, Q5</td>
                                    <td className={classes.tbody}>09047300221</td>
                                    <td className={classes.tbody}>27/04/2018</td>
                                    <td className={classes.tbody}>Đang giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.success}>
                                    <td className={classes.tbody}>5</td>
                                    <td className={classes.tbody}>Trần Văn Hòa</td>
                                    <td className={classes.tbody}>23, Lê Hồng Phong, P4, Q5</td>
                                    <td className={classes.tbody}>09047383221</td>
                                    <td className={classes.tbody}>25/04/2018</td>
                                    <td className={classes.tbody}>Đã giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.info}>
                                    <td className={classes.tbody}>2</td>
                                    <td className={classes.tbody}>Trần Hạnh</td>
                                    <td className={classes.tbody}>1, Nguyễn Thị Minh Khai, P4, Q5</td>
                                    <td className={classes.tbody}>09047383221</td>
                                    <td className={classes.tbody}>07/05/2018</td>
                                    <td className={classes.tbody}>Chưa giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.success}>
                                    <td className={classes.tbody}>3</td>
                                    <td className={classes.tbody}>Nguyễn Long</td>
                                    <td className={classes.tbody}>234, An Dương Vương, P4, Q5</td>
                                    <td className={classes.tbody}>09047383221</td>
                                    <td className={classes.tbody}>02/05/2018</td>
                                    <td className={classes.tbody}>Đang giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.info}>
                                    <td className={classes.tbody}>4</td>
                                    <td className={classes.tbody}>Trần Thị Hà</td>
                                    <td className={classes.tbody}>12, Trần Phú, P4, Q5</td>
                                    <td className={classes.tbody}>09047300221</td>
                                    <td className={classes.tbody}>27/04/2018</td>
                                    <td className={classes.tbody}>Đang giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.success}>
                                    <td className={classes.tbody}>5</td>
                                    <td className={classes.tbody}>Trần Văn Hòa</td>
                                    <td className={classes.tbody}>23, Lê Hồng Phong, P4, Q5</td>
                                    <td className={classes.tbody}>09047383221</td>
                                    <td className={classes.tbody}>25/04/2018</td>
                                    <td className={classes.tbody}>Đã giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.info}>
                                    <td className={classes.tbody}>2</td>
                                    <td className={classes.tbody}>Trần Hạnh</td>
                                    <td className={classes.tbody}>1, Nguyễn Thị Minh Khai, P4, Q5</td>
                                    <td className={classes.tbody}>09047383221</td>
                                    <td className={classes.tbody}>07/05/2018</td>
                                    <td className={classes.tbody}>Chưa giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.success}>
                                    <td className={classes.tbody}>3</td>
                                    <td className={classes.tbody}>Nguyễn Long</td>
                                    <td className={classes.tbody}>234, An Dương Vương, P4, Q5</td>
                                    <td className={classes.tbody}>09047383221</td>
                                    <td className={classes.tbody}>02/05/2018</td>
                                    <td className={classes.tbody}>Đang giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.info}>
                                    <td className={classes.tbody}>4</td>
                                    <td className={classes.tbody}>Trần Thị Hà</td>
                                    <td className={classes.tbody}>12, Trần Phú, P4, Q5</td>
                                    <td className={classes.tbody}>09047300221</td>
                                    <td className={classes.tbody}>27/04/2018</td>
                                    <td className={classes.tbody}>Đang giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.success}>
                                    <td className={classes.tbody}>5</td>
                                    <td className={classes.tbody}>Trần Văn Hòa</td>
                                    <td className={classes.tbody}>23, Lê Hồng Phong, P4, Q5</td>
                                    <td className={classes.tbody}>09047383221</td>
                                    <td className={classes.tbody}>25/04/2018</td>
                                    <td className={classes.tbody}>Đã giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.info}>
                                    <td className={classes.tbody}>2</td>
                                    <td className={classes.tbody}>Trần Hạnh</td>
                                    <td className={classes.tbody}>1, Nguyễn Thị Minh Khai, P4, Q5</td>
                                    <td className={classes.tbody}>09047383221</td>
                                    <td className={classes.tbody}>07/05/2018</td>
                                    <td className={classes.tbody}>Chưa giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.success}>
                                    <td className={classes.tbody}>3</td>
                                    <td className={classes.tbody}>Nguyễn Long</td>
                                    <td className={classes.tbody}>234, An Dương Vương, P4, Q5</td>
                                    <td className={classes.tbody}>09047383221</td>
                                    <td className={classes.tbody}>02/05/2018</td>
                                    <td className={classes.tbody}>Đang giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.info}>
                                    <td className={classes.tbody}>4</td>
                                    <td className={classes.tbody}>Trần Thị Hà</td>
                                    <td className={classes.tbody}>12, Trần Phú, P4, Q5</td>
                                    <td className={classes.tbody}>09047300221</td>
                                    <td className={classes.tbody}>27/04/2018</td>
                                    <td className={classes.tbody}>Đang giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>
                                <tr className={classes.success}>
                                    <td className={classes.tbody}>5</td>
                                    <td className={classes.tbody}>Trần Văn Hòa</td>
                                    <td className={classes.tbody}>23, Lê Hồng Phong, P4, Q5</td>
                                    <td className={classes.tbody}>09047383221</td>
                                    <td className={classes.tbody}>25/04/2018</td>
                                    <td className={classes.tbody}>Đã giao</td>
                                    <td style={{ textAlign: 'center' }}><a className={classes.agileIcon} href="#"><EditIcon /></a></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Order);