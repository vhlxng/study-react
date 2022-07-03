import React, { useCallback, useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

import useAppSelector from '../../hooks/useAppSelector'
import useAppDispatch from '../../hooks/useAppDispatch'

import {
  loginSuccess,
  logoutAction,
  setCollapsed,
  setSidebarOpen
} from '../../redux/auth/actions'
import { User } from '../../type/user.type'
import { getJwtToken } from '../../utils/local-storage'
import { cleanUpBeforeLogout } from '../../utils/auth'

function MasterLayout() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const token = getJwtToken()
  console.log(token);
  

  const logout = useCallback(async () => {
    cleanUpBeforeLogout()
    dispatch(logoutAction())
    navigate('/dang-nhap')
  }, [dispatch, history])


  return (
    <div className="flex overflow-hidden h-screen bg-gray-100">
        <main className="overflow-y-auto relative flex-1 focus:outline-none">
          <div className="p-5 mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

  )
}

export default MasterLayout
