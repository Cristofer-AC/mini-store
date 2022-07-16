import React, { useEffect } from 'react'
import { getListOfCategories } from '../../api/get'
import { useDispatch } from 'react-redux'
import { setInitialState } from '../../actions'

export const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    getListOfCategories().then((res) => dispatch(setInitialState(res)))
  }, [])


  return (
    <main>
      Home
    </main>
  )
}
