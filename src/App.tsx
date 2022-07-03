import { Suspense, useState } from 'react'
import store from './redux'
import vi_VN from 'antd/es/locale/vi_VN'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DangNhap from './pages/dang-nhap/index'
import Preset from './pages/preset/index'
import routes from './pages/router'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import MasterLayout from './components/master-layout'
import React from 'react'

const App = ()=> {

  return (
    <Provider store = {store}>
      <ConfigProvider locale = {vi_VN}>
        <BrowserRouter>
          <Routes>
            <Route  index element ={<Preset/>}/>
            <Route  path= "dang-nhap" element ={<DangNhap/>}/>
            <Route path="/" element={<MasterLayout />}>
              {routes.map((route, key) => (
                <Route
                  key={key}
                  path={route.path}
                  element={
                    <Suspense fallback="Loading...">
                      <route.component />
                    </Suspense>
                  }
                />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  )
}

export default App
