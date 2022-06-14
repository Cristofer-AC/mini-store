import React from 'react'
import { Header as Div, Brand } from './styles'
import { MdSearch, MdMenu } from 'react-icons/md'

export const Header = () => {
  return (
    <Div>
        <Brand>
          Store
          <MdMenu />
          <MdSearch />
        </Brand>
    </Div>
  )
}
