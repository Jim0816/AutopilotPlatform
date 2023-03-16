

// 导入自定义页面组件
import Login from '../pages/Login'
import Launch from '../pages/Develop'

import ReactTooltip from 'react-tooltip';

export const mainRoutes = [
    {
        path: '/login',
        title: '登陆',
        component: Login
    },
    {
        path: '/404',
        title: '错误',
        component: Error
    }
]


export const adminRoutes = [
    {
        path: '/admin/develop',
        title: '开发者控制面板',
        component: Launch,
        exact: true,
        isShow: true,
        icon: 'shop',
        // logo: <><img src={logo1} style={{ height: "42px", width: "42px" }} data-tip="开发者控制面板" data-type={'light'} data-place={"right" }></img><ReactTooltip /></>
    },
]