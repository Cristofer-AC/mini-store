import React from 'react'
import { Link } from '@reach/router'

export const BarItem = (props) => {

  const { name, id } = props

  return (
    <Link to={`category/${id}`}>
        <p>{name}</p>
        <img src='' alt='' />
        {/* {console.log(item.list[0])} */}
    </Link>
  )
}
