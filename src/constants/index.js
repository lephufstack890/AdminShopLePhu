import Dashboard from './../components/Admin/Dashboard'
import Order from './../components/Admin/Order'
import ManageCat from './../components/Admin/ManageCat'
import ManageProduct from './../components/Admin/Product/ManageProduct'
import AddUser from '../components/Admin/User/AddUser'
import ListUser from '../components/Admin/User/ListUser'
import AddSlider from '../components/Admin/Slider/AddSlider'
import ListSlider from '../components/Admin/Slider/ListSlider'
import LoginPage from './../container/LoginPage'
import SignupPage from '../container/SignupPage'
import RedirectUser from '../container/RedirectUser'
import ForgotPage from '../container/ForgotPage'
export const API_ENPOINT = 'http://localhost:3000';

export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 201
}

export const ROUTES_ADMIN = [
    {
        path: '/admin/dashboard',
        name: 'Trang chủ',
        exact: true,
        component: Dashboard,
    },
    {
        path: '/admin/order',
        name: 'Đơn hàng',
        component: Order,
    },
    {
        path: '/admin/manageProduct',
        name: 'Quản lý sản phẩm',
        component: ManageProduct,
    },
    {
        path: '/admin/addUser',
        name: 'Thêm thành viên',
        component: AddUser
    },
    {
        path: '/admin/listUser',
        name: 'Quản lý thành viên',
        component: ListUser
    },
    {
        path: '/admin/addSlider',
        name: 'Thêm slider',
        component: AddSlider
    },
    {
        path: '/admin/listSlider',
        name: 'Quản lý Slider',
        component: ListSlider
    },
    {
        path: '/admin/manageCat',
        name: 'Quản lý danh mục',
        component: ManageCat
    }
]

export const ROUTES = [
    {
        path: '/',
        name: 'loading',
        exact: true,
        component: RedirectUser,
    },
    {
        path: '/admin/login',
        name: 'Đăng nhập',
        component: LoginPage
    },
    {
        path: '/admin/signup',
        name: 'Đăng ký',
        component: SignupPage
    },
    {
        path: '/admin/forgot',
        name: 'Quên mật khẩu',
        component: ForgotPage
    }
]