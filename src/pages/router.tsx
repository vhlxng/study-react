import { lazy } from 'react'
import { RouteType } from '../type/route.type'
import { HiOutlineHome } from 'react-icons/hi'
import { UserType } from '../type/user.type'

const router: Array<RouteType> = [
  {
    path: 'dang-nhap',
    name: 'Home',
    exact: true,
    icon: HiOutlineHome,
    isHidden: true,
    component: lazy(() => import('./dang-nhap/index')),
    allowedUserTypes: [UserType.ADMIN, UserType.CLIENT]
  },
]

export default router
