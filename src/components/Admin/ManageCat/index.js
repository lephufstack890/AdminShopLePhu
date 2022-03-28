import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import * as catActions from './../../../action/ManageCat'
import * as modalCatActions from './../../../action/ModalCat'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import renderTextField from './../../../components/Admin/FormHelper/TextField/index'
import { bindActionCreators, compose } from "redux";
import validate from './validate'
import { Field, reduxForm } from 'redux-form'

class ManageCat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorName: '',
            errorSlug: '',
            name: '',
            slug: ''
        }
    }

    renderCatItem = () => {
        let xhtml;
        const { listCat, classes } = this.props
        let t = 0;
        xhtml = (
            listCat.map(item => {
                t++;
                return (
                    <tr className={classes.info}>
                        <td className={classes.tbody}>{t}</td>
                        <td className={classes.tbody}>{item.name}</td>
                        <td className={classes.tbody}>{item.slug}
                        </td>
                        <td className={classes.tbody}>{item.createdAt}</td>
                        <td style={{ textAlign: 'center' }}>
                            <span>
                                <a
                                    href="#"
                                    className="agile-icon"
                                    data-toggle="modal"
                                    data-target="#myModal"
                                    onClick={() => this.handleCat(item)}
                                >
                                    <i className="fa fa-pencil-square-o" />
                                </a>
                            </span>
                            <span>
                                <a
                                    className="agile-icon"
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#myModal1"
                                    onClick={() => this.deleteCat(item)}
                                >
                                    <i className="fa fa-times-circle" />
                                </a>
                            </span>
                        </td>
                    </tr>
                )
            })
        );
        return xhtml;
    }

    handleSubmitForm = () => {
        const { catActionCreators, catEditing } = this.props;
        const { addCat, fetchListCat, updateCat } = catActionCreators
        const { name, slug } = this.state
        const cat = {
            name: name,
            slug: slug
        }
        // console.log(cat);
        var nameCat = document.forms["myForm"]["name"].value;
        var slugCat = document.forms["myForm"]["slug"].value;
        if (nameCat == "") {
            this.setState({
                errorName: 'Không được bỏ trống tên danh mục!'
            })
        }
        if (slugCat == "") {
            this.setState({
                errorSlug: 'Không được bỏ trống đường dẫn!'
            })
        }
        var d = new Date();
        var date = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
        if (catEditing && catEditing.id) {
            updateCat(name, slug, date + '-' + month + '-' + year);
        } else {
            if (nameCat != "" && slugCat != "") {
                addCat(name, slug, date + '-' + month + '-' + year);
            }
        }
        fetchListCat()
    }

    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value,
        })
    }

    handleCat = (cat) => {
        const { catActionCreators, modalCatActionCreators } = this.props;
        const { changeModalCatTitle, changeModalCatButton } = modalCatActionCreators;
        const { setCatEditing } = catActionCreators;
        setCatEditing(cat);
        changeModalCatTitle('Cập nhật danh mục');
        changeModalCatButton('Cập nhật');

    }

    deleteCat = (cat) => {
        const { id } = cat;
        const { catActionCreators } = this.props;
        const { deleteCat } = catActionCreators;
        if (confirm('Bạn có chắc chắn xóa ?')) { //eslint-disable-line
            deleteCat(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.name,
            slug: nextProps.slug
        })
    }



    render() {
        const { classes, title, nameButton, handleSubmit } = this.props;
        const { errorName, errorSlug } = this.state;
        return (
            <div>
                <ol className={classes.breadcrumb}>
                    <li className={classes.breadcrumbItem}><a href="#" style={{ color: '#fff', textDecoration: 'none' }} className={classes.breadcumbText}>
                        Trang chủ
                        <ArrowForwardIosIcon className={classes.icon} />
                        <span className={classes.textRed}>Quản lý danh mục</span>
                    </a>
                    </li>
                </ol>
                <div className="w3l-table-info">
                    <h2 className={classes.addText}>{title}</h2>
                    <div className={classes.addProduct}>
                        <div className="row">
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <form name="myForm" onSubmit={handleSubmit(this.handleSubmitForm)}>
                                    <div className="form-group">
                                        <label>Tên danh mục</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                        />
                                        <p style={{ color: 'red', fontWeight: 'bold' }}>{errorName}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Đường dẫn</label>
                                        <input
                                            className="form-control"
                                            margin="normal"
                                            name="slug"
                                            type="text"
                                            value={this.state.slug}
                                            onChange={this.onChange}
                                        />
                                        <p style={{ color: 'red', fontWeight: 'bold' }}>{errorSlug}</p>
                                    </div>
                                    <button type="submit" className="btn btn-danger">{nameButton}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={classes.products}>
                        <h2 className={classes.update}>Danh sách danh mục sản phẩm</h2>
                        <table className={classes.table} style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th className={classes.thead} style={{ textAlign: 'center' }}>STT</th>
                                    <th className={classes.thead} style={{ textAlign: 'center' }}>Tên danh mục</th>
                                    <th className={classes.thead} style={{ textAlign: 'center' }}>Đường dẫn</th>
                                    <th className={classes.thead} style={{ textAlign: 'center' }}>Ngày tạo</th>
                                    <th className={classes.thead} style={{ textAlign: 'center' }}>Tác vụ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderCatItem()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        id: state.cat.catEditing ? state.cat.catEditing.id : '',
        catEditing: state.cat.catEditing,
        name: state.cat.catEditing ? state.cat.catEditing.name : '',
        slug: state.cat.catEditing ? state.cat.catEditing.slug : '',
        listCat: state.cat.listCat,
        title: state.modalCat.title,
        nameButton: state.modalCat.nameButton
    }
}
const mapDispatchToProps = dispatch => {
    return {
        catActionCreators: bindActionCreators(catActions, dispatch),
        modalCatActionCreators: bindActionCreators(modalCatActions, dispatch)
    }
}

const FORM_NAME = 'CAT_MANAGEMENT'
const withReduxForm = reduxForm({
    form: FORM_NAME,
    validate
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);


export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm
)(ManageCat)