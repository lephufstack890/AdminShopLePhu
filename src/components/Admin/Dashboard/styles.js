import theme from "../../../commons/index";
const styles = theme => ({
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
        color: theme.color.white,
        textDecoration: 'none'
    },
  
    listGroup: {
        marginTop: 20,
        color: 'blue'
    },
    addText: {
        margin: 0,
        paddingLeft: 10,
        color: 'blue'
    }
});

export default styles;