import React from 'react'
import { BarItem } from './BarItem'
import { useSelector } from 'react-redux'
export const CategoriesBar = () => {

  const products = useSelector((state) => state.products)

  return (
    <div>
      { products.map((item, index) => 
          <BarItem key={index} id={index} name={item.category} />
        ) }
    </div>
  )
}
