import { LOCAL_STORAGE_KEYS } from '../constants/local-storage'

export const getJwtToken = (): string | null =>
  localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN)

export const setJwtToken = (token: string): void =>
  localStorage.setItem(LOCAL_STORAGE_KEYS.JWT_TOKEN, token)
