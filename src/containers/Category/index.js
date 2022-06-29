import React from 'react'
import { Grid } from '../../components/Grid'
import { CarouselItem } from '../../components/Carousel/CarouselItem'
import { useSelector } from 'react-redux'

export const Category = (props) => {

  const products = useSelector((state) => state.products)

  return (
    <div>
      <h2>{products[props.id].category}</h2>
      <Grid>
        {
          products[props.id].list.map((item, index) =>
          <CarouselItem key={index} id={index} {...item} />
        )}
      </Grid>
    </div>
  )
}
