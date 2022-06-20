import React from 'react'
import { Link } from '@reach/router'
import { Header as Div, Brand } from './styles'
import { MdSearch, MdMenu } from 'react-icons/md'

export const Header = () => {
  return (
    <Div>
        <Brand>
          <Link to='/' >Store</Link>
          <MdMenu />
          <MdSearch />
        </Brand>
    </Div>
  )
}
