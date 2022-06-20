import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Detail } from '../../components/Detail'

export const ProductDetail = (props) => {
  
  const products = useSelector((state) => state.products)

  const [ viewing, setViewing ] = useState({})

  useEffect(() => {
    setViewing(products[props.id])
  }, [])
  

  return (
    <main>
        <Detail {...viewing} />
    </main>
  )
}
