const validate = values => {
    const error = {};
    const { name, slug } = values
    if(!name){
        error.name = 'Tên danh mục không được bỏ trống!';
    }
    if(!slug){
        error.slug = 'Đường dẫn không được bỏ trống!';
    }
    return error;
}

export default validate