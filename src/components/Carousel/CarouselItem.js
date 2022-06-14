import React from 'react'
import { Card, Value, Image } from './styles'
import { MdCircle } from 'react-icons/md'

export const CarouselItem = (props) => {

  const { name, image, price } = props

  return (
    <Card>
        <p>{name}</p>
        <Image src={image} alt=''/>
          <Value><MdCircle /> {price}</Value>
    </Card>
  )
}
