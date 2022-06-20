import React from 'react'

import { Router } from '@reach/router'
import { Header } from './components/Header'

import { Home } from './containers/Home'
import { ProductDetail } from './containers/ProductDetail'
import { GlobalStyle } from './globalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Home path='/' />
        <ProductDetail path='detail/:id' />
      </Router>
    </>
  )
}
