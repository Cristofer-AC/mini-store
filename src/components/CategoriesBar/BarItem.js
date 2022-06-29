import React from 'react'
import { Link } from '@reach/router'

export const BarItem = (props) => {

  const { name, image, id } = props

  return (
    <Link to={`category/${id}`}>
        <p>{name}</p>
        <img src={image} alt='' />
    </Link>
  )
}
