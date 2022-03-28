import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class AddSlider extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <ol className={classes.breadcrumb}>
                    <li className={classes.breadcrumbItem}><a href="#" style={{ color: '#fff', textDecoration: 'none' }} className={classes.breadcumbText}>
                        Trang chủ
                        <ArrowForwardIosIcon className={classes.icon} />
                        <span className={classes.textRed}>Thêm slider</span>
                    </a>
                    </li>
                </ol>
                <div className={classes.addSlider}>
                    <h2 className={classes.addText}>Thêm Slider</h2>
                    <div className="row">
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                            <form action>
                                <div className="form-group">
                                    <label htmlFor="ma">Chọn ảnh</label>
                                    <input type="file" id="ma" />
                                </div>
                                <button type="submit" className="btn btn-default">Thêm mới</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AddSlider);