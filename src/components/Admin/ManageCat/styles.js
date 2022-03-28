const styles = theme => ({
    textRed: {
        color: '#e7c000'
    },
    breadcrumb: {
        listStyle: 'none',
        paddingLeft: 0
    },
    icon: {
        fontSize: 12
    },
    breadcrumbItem: {
        background: '#333',
        padding: 14,
    },
    breadcumbText: {
        color: theme.color.white
    },
    addProduct: {
        padding: '40px 63px',
        paddingTop: 13
    },
    thead: {
        padding: '10px 26px',
        backgroundColor: '#0984e3',
        fontWeight: 800,
        color: theme.color.white
    },
    tbody: {
        padding: '10px 26px',
        textAlign: 'center'
    },
    success: {
        backgroundColor: '#55efc4'
    },
    info: {
        backgroundColor: '#81ecec'
    },
    products: {
        padding: 20
    },
    update: {
        fontSize: 30,
        color: 'blue',
        paddingBottom: 10
    },
    addText: {
        margin: 0,
        paddingLeft: 10,
        color: 'blue'
    },
    textField: {
        width: '100%',
        margin: 0,
        '& .MuiInputBase-input': {
            fontSize: '20px'
        },
        '& .Mui-error': {
            fontSize: '13px'
        },
    },
    
});

export default styles;