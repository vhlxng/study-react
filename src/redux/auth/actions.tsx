import { User } from "../../type/user.type"

export const AUTH_ACTIONS = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  SET_COLLAPSED: 'SET_COLLAPSED',
  SET_SIDEBAR_OPEN: 'SET_SIDEBAR_OPEN'
}

export const loginSuccess = (payload: User) => ({
  type: AUTH_ACTIONS.LOGIN_SUCCESS,
  payload
})

export const logoutAction = () => ({
  type: AUTH_ACTIONS.LOGOUT
})

export const setCollapsed = (payload: boolean) => ({
  type: AUTH_ACTIONS.SET_COLLAPSED,
  payload
})

export const setSidebarOpen = (payload: boolean) => ({
  type: AUTH_ACTIONS.SET_SIDEBAR_OPEN,
  payload
})
