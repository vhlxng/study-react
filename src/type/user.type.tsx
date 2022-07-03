export enum EGender {
  FEMALE = 0,
  MALE = 1
}

export type UserParams = {
  page?: number
  size?: number
  search?: string
  type?: string
  status?: number
}

export type ResetPasswordBody = {
  email?: string
}

export type User = {
  id: string
  name: string
  status: UserStatus
  type: UserType
  url: string | null
  userId: string
  phone: string
  email: string
  department: string
}

export enum UserStatus {
  ACTIVE = 1,
  INACTIVE = 0
}

export const UserStatusOptions: Array<{
  value: UserStatus
  label: string
}> = [
  {
    value: UserStatus.ACTIVE,
    label: 'Hoạt động'
  },
  {
    value: UserStatus.INACTIVE,
    label: 'Không hoạt động'
  }
]

export enum UserType {
  ADMIN = 'ADMIN',
  CLIENT = 'CLIENT'
}

export const UserTypeOptions: Array<{
  value: UserType
  label: string
}> = [
  {
    value: UserType.ADMIN,
    label: 'Admin'
  },
  {
    value: UserType.CLIENT,
    label: 'Giảng viên - Chuyên viên'
  }
]
