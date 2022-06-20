import React from 'react'
import { Link } from '@reach/router'
import { Card, Value, Image } from './styles'
import { MdCircle } from 'react-icons/md'

export const CarouselItem = (props) => {

  const { name, image, price, id } = props

  return (
      <Card>
          <Link to={`detail/${id}`} >
            <p>{name}</p>
          </Link>
          <Image src={image} alt=''/>
            <Value><MdCircle /> {price}</Value>
      </Card>
  )
}
