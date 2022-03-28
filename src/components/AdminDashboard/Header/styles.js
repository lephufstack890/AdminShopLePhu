import { alpha, makeStyles } from '@material-ui/core/styles';
const styles = theme => ({
    grow: {
        flexGrow: 1,
        minHeight: 0,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    backgroundAdmin: {
        backgroundColor: '#f8f2f2',
        borderRadius: 88,
        margin: 0,
        marginTop: 10
    },
    listStyle: {
        listStyle: 'none',
        padding: '0px 0px 0px 19px',
        margin: 5
    },
    profileImg: {
        display: 'flex'
    },
    username: {
        paddingLeft: 24,
        paddingRight: 37
    },
    dropdownToggle: {
        textDecoration: 'none'
    },
    avatar: {
        borderRadius: 49,
        width: 50
    },
    infomation: {
        margin: 0,
        fontSize: 18,
        paddingBottom: 8,
        textDecoration: 'underline',
        color: '#333',
    },
    IconAvatar: {
        transform: 'translateY(45%)',
        fontSize: 29
    },
    dropdownItem: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

export default styles;