import { Reducer } from 'redux'
import { User } from "../../type/user.type"
import { AUTH_ACTIONS } from './actions'

interface AuthState {
  user?: User
  permissions: Set<string>
  collapsed: boolean
  sidebarOpen: boolean
}

interface AuthAction {
  type: string
  payload?: User
}

const initialState: AuthState = {
  user: undefined,
  permissions: new Set(),
  collapsed: false,
  sidebarOpen: false
}

const reducer: Reducer<AuthState, AuthAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload
      }
    }
    case AUTH_ACTIONS.LOGOUT:
      return { ...state, user: undefined }
    case AUTH_ACTIONS.SET_COLLAPSED: {
      return { ...state, collapsed: action.payload }
    }
    case AUTH_ACTIONS.SET_SIDEBAR_OPEN: {
      return { ...state, sidebarOpen: action.payload }
    }
    default:
      return state
  }
}

export default reducer
