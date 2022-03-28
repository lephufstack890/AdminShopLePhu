import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import * as productActions from './../../../../action/ManageProduct'
import axios from 'axios'
import { reduxForm } from "redux-form";

class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            code: '',
            name: '',
            cat: '',
            slug: '',
            desc: '',
            price: '',
            image: '',
            cat_id: '',
            picturePreview: '',
            selectedFile: '',
            errorCode: '',
            errorName: '',
            errorCat: '',
            errorSlug: '',
            errorDesc: '',
            errorPrice: '',
            errorImage: '',
        }

    }
    renderProductItem = () => {
        let xhtml
        const { listProduct, classes } = this.props
        let t = 0
        xhtml = (
            listProduct.map(item => {
                t++
                return (
                    <tr className={classes.info}>
                        <td className={classes.tbody}>{t}</td>
                        <td className={classes.tbody}>{item.code}</td>
                        <td className={classes.tbody}><img style={{ width: 53 }} src={item.image} alt="" /></td>
                        <td className={classes.tbody}>{item.name}
                        </td>
                        <td className={classes.tbody}>{item.desc}</td>
                        <td className={classes.tbody}>{item.slug}</td>
                        <td className={classes.tbody}>{item.price}đ</td>
                        <td className={classes.tbody}>{item.cat}</td>
                        <td style={{ textAlign: 'center' }}>
                            <span>
                                <a className="agile-icon" href="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-pencil-square-o" /></a>
                            </span>
                            <span>
                                <a className="agile-icon" href="#" data-toggle="modal" data-target="#myModal1"><i className="fa fa-times-circle" /></a>
                            </span>
                        </td>
                    </tr>
                )
            })
        )
        return xhtml
    }

    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.type === 'selected' ? target.selected : target.value
        this.setState({
            [name]: value
        })
    }
    uploadPicture = async (e) => {
        this.setState({
            picturePreview: URL.createObjectURL(e.target.files[0]),
            selectedFile: e.target.files[0]
        });
    };
    handleSubmitForm = async (e) => {
        const { productActionCreators } = this.props
        const { addProduct, fetchListProduct } = productActionCreators
        const { code, name, cat, slug, desc, price, image, cat_id } = this.state
        const product = {
            code: code,
            name: name,
            cat: cat,
            slug: slug,
            desc: desc,
            price: price,
            image: image,
            cat_id: cat_id
        }
        var codeProduct = document.forms["myForm"]["code"].value;
        var nameProduct = document.forms["myForm"]["name"].value;
        var catProduct = document.forms["myForm"]["name"].value;
        var slugProduct = document.forms["myForm"]["slug"].value;
        var descProduct = document.forms["myForm"]["desc"].value;
        var priceProduct = document.forms["myForm"]["price"].value;
        var imageProduct = document.forms["myForm"]["price"].value;
        if (codeProduct == "") {
            this.setState({
                errorCode: 'Không được bỏ trống mã sản phẩm!'
            })
        }
        if (nameProduct == "") {
            this.setState({
                errorName: 'Không được bỏ trống tên sản phẩm!'
            })
        }
        if (catProduct == "") {
            this.setState({
                errorCat: 'Không được bỏ trống tên danh mục!'
            })
        }
        if (slugProduct == "") {
            this.setState({
                errorSlug: 'Không được bỏ trống đường dẫn!'
            })
        }
        if (descProduct == "") {
            this.setState({
                errorDesc: 'Không được bỏ trống mô tả sản phẩm!'
            })
        }
        if (priceProduct == "") {
            this.setState({
                errorPrice: 'Không được bỏ trống giá sản phẩm!'
            })
        }
        if (imageProduct == "") {
            this.setState({
                errorImage: 'Không được bỏ trống hình ảnh!'
            })
        }
        if (codeProduct != "" && nameProduct != "" && slugProduct != "" && descProduct != "" && priceProduct != "" && imageProduct != "") {
            const data = new FormData()
            data.append('file', this.state.selectedFile)
            let url = "http://127.0.0.1:8000/api/upload";

            axios.post(url, data, { // receive two parameter endpoint url ,form data 
            })
                .then(res => { // then print response status
                    console.warn(res);
                })
            addProduct(code, name, cat, slug, desc, price, image, cat_id)
        }
        fetchListProduct()
    }
    render() {
        const { classes, handleSubmit, listCat } = this.props;
        const { errorCode, errorName, errorSlug, errorDesc, errorPrice, errorCat, errorImage } = this.state
        return (
            <div className={classes.manageProduct}>
                <ol className={classes.breadcrumb}>
                    <li className={classes.breadcrumbItem}><a href="#" style={{ color: '#fff', textDecoration: 'none' }} className={classes.breadcumbText}>
                        Trang chủ
                        <ArrowForwardIosIcon className={classes.icon} />
                        <span className={classes.textRed}>Quản lý sản phẩm</span>
                    </a>
                    </li>
                </ol>
                <div className="w3l-table-info">
                    <h2 className={classes.addText}>Thêm sản phẩm</h2>
                    <div className={classes.addProduct}>
                        <div className="row">
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <form onSubmit={handleSubmit(this.handleSubmitForm)} name="myForm" enctype="multipart/form-data">
                                    <div className="form-group">
                                        <label htmlFor="code">Mã sản phẩm</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="code"
                                            id="code"
                                            value={this.state.code}
                                            onChange={this.onChange}
                                        />
                                        <p style={{ color: 'red', fontWeight: 'bold' }}>{errorCode}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Tên sản phẩm</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                        />
                                        <p style={{ color: 'red', fontWeight: 'bold' }}>{errorName}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Danh mục</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cat"
                                            id="cat"
                                            value={this.state.cat}
                                            onChange={this.onChange}
                                        />
                                        <p style={{ color: 'red', fontWeight: 'bold' }}>{errorCat}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="slug">Đường dẫn</label>
                                        <input
                                            type="text"
                                            name="slug"
                                            className="form-control"
                                            id="slug"
                                            value={this.state.slug}
                                            onChange={this.onChange}
                                        />
                                        <p style={{ color: 'red', fontWeight: 'bold' }}>{errorSlug}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="desc">Mô tả</label>
                                        <textarea
                                            className="form-control"
                                            name="desc" rows={5}
                                            id="comment"
                                            defaultValue={""}
                                            value={this.state.desc}
                                            onChange={this.onChange}
                                        />
                                        <p style={{ color: 'red', fontWeight: 'bold' }}>{errorDesc}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Giá bán</label>
                                        <input
                                            type="text"
                                            name="price"
                                            className="form-control"
                                            id="price"
                                            value={this.state.price}
                                            onChange={this.onChange}
                                        />
                                        <p style={{ color: 'red', fontWeight: 'bold' }}>{errorPrice}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Chọn hình ảnh</label>
                                        <input
                                            type="file"
                                            name="file"
                                            onChange={this.uploadPicture}
                                        />
                                        <img
                                            src={this.state.picturePreview} alt=""
                                            style={{
                                                width: '75px',
                                                paddingTop: 10
                                            }}
                                        />
                                        <p style={{ color: 'red', fontWeight: 'bold' }}>{errorImage}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Chọn danh mục</label>
                                        <select
                                            name="cat_id"
                                            className="form-control"
                                            onChange={this.onChange}
                                            value={this.state.cat_id}
                                        >
                                            {listCat.map(item => {
                                                return (
                                                    <option value={item.id}>{item.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-default">Thêm sản phẩm</button>
                                </form>
                            </div>
                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            </div>
                        </div>
                    </div>
                    <div className={classes.products}>
                        <h2 className={classes.update}>Danh sách sản phẩm</h2>
                        <table className={classes.table} style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th className={classes.thead}>STT</th>
                                    <th className={classes.thead}>Mã sản phẩm</th>
                                    <th className={classes.thead}>Hình ảnh</th>
                                    <th className={classes.thead}>Tên sản phẩm</th>
                                    <th className={classes.thead} style={{ textAlign: 'center' }}>Mô tả</th>
                                    <th className={classes.thead}>Đường dẫn</th>
                                    <th className={classes.thead}>Giá bán</th>
                                    <th className={classes.thead}>Danh mục</th>
                                    <th className={classes.thead}>Chỉnh sửa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderProductItem()}
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
        listProduct: state.product.listProduct,
        listCat: state.cat.listCat
    }
}

const mapDispatchToProps = dispatch => {
    return {
        productActionCreators: bindActionCreators(productActions, dispatch)
    }
}

const FORM_NAME = 'CAT_MANAGEMENT'
const withReduxForm = reduxForm({
    form: FORM_NAME
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm
)(AddProduct);