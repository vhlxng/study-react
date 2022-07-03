import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '../redux/index'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
