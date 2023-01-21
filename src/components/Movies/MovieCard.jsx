import React from 'react'

export const MovieCard = ({item: {id, cover, name, time}, onAdd}) => {
  return (
    <>
    <div className='MovieBox'>
      <div className='img'>
        <img src={cover} alt='' />
      </div>
      <div className='text'>
        <h3>{name}</h3>
        <span>{time}</span> <br /> 
        {/*<Link to={`/singlepage/${id}`}>*/}
        <button className='primary-btn' onClick={()=>onAdd(id)}  >
          <i className='fa fa-plus'></i> Add to cart
        </button>
        {/*</Link>*/}
      </div>
    </div>
  </>
  )
}
