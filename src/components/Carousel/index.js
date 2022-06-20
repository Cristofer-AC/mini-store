import React from 'react'
import { useSelector } from 'react-redux'
import { CarouselItem } from './CarouselItem'
import { Carousel as Container } from './styles'

export const Carousel = () => {

  const products = useSelector((state) => state.products)

  return (
    <div>
      <h2>Section</h2>
      <Container>
        { products.map((item, index) => 
          <CarouselItem id={index} key={index} {...item} />
          ) }
      </Container>
    </div>
  )
}
