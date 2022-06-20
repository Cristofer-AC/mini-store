import React from 'react'
import { ProductDetail, Primary } from './styles'
import { MdCircle } from 'react-icons/md'

export const Detail = (props) => {

  const { image, name, price } = props

  return (
    <ProductDetail>
      <img src={image} alt='' />
      <p>{name}</p>
      <p><MdCircle /> {price}</p>
      <Primary>BUY</Primary>
      <h2>Title</h2>
      <p>Desc...</p>
    </ProductDetail>
  )
}
