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
    textRed: {
        color: '#e7c000'
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
    listOrderText: {
        textAlign: 'center',
        color: 'blue',
        textTransform: 'uppercase',
        paddingBottom: 10
    }
});

export default styles;