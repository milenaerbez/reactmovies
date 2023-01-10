import React from 'react'
import { HomeCard } from './HomeCard'


export const Home = ({items}) => {
  return (
    <>
    <div className='homeContainer'>
    {items.map((item) => (
  <HomeCard key={item.id} item={item} />
))}
    </div>
    
    </>
  )
}
