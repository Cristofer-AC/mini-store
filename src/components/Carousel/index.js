import React from 'react'
import { CarouselItem } from './CarouselItem'
import { Carousel as Container } from './styles'

export const Carousel = () => {

  return (
    <div>
      <h2>Section</h2>
      <Container>
        <CarouselItem id="1" key="1" />
      </Container>
    </div>
  )
}
