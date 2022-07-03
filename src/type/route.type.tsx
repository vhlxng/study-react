import { IconType } from 'react-icons'
import { ComponentType, LazyExoticComponent } from 'react'
import { UserType } from './user.type'

export type RouteType = {
  path: string
  name: string
  exact?: boolean
  isHidden?: boolean
  icon?: IconType
  component: LazyExoticComponent<ComponentType<any>>
  routes?: Array<RouteType>
  allowedUserTypes: UserType[]
}
