import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../redux/index'

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch
