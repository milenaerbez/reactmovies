import React, { useState } from 'react'
import { homeData } from '../../Podaci'
import { Homes } from '../homes/Homes'
import Movies from '../Movies/Movies'


export const HomePages = () => {
const [items, setItems] = useState(homeData)

  return (
    <>
    <Homes />
    <Movies items={items} title='Upcoming movies' />
    </>
  )
}
