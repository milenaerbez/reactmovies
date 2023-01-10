import React from 'react'
import { Link } from 'react-router-dom'



export const HomeCard = ({item:{id, cover, name, rating, time, desc, starring, genres, tags, video, amount}}) => {




    return (
        <>
          <div className='box'>
            <div className='coverImage'>
              <img src={cover} alt='' />
            </div>
            <div className='content flex'>
              <div className='details row'>
                <h1>{name}</h1>
                <div className='rating flex'>
                  <div className='rate'>
                    <i className='fas fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-half'></i>
                  </div>
                  <label>{rating}(Imdb)</label>
                  <span>GP</span>
                  <label>{time}</label>
                </div>
                <p>{desc}</p>
                <div className='cast'>
                  <h4>
                    <span>Starring </span>
                    {starring}
                  </h4>
                  <h4>
                    <span>Genres </span>
                    {genres}
                  </h4>
                  <h4>
                    <span>Tags </span>
                    {tags}
                  </h4>
                </div>
              
                
                <button className='primary-btn'  >
                <i class="fa-solid fa-plus"></i> Add to List
                </button>
                
                
              </div>
              <div className='palyButton row'>
                <Link to={`/singlepage/${id}`}>
                  <button>
                    <div className='img'> 
                       <img src='https://www.hempsons.co.uk/app/uploads/2022/10/youtube-play-red-logo-png-transparent-background-6.png' alt='' /> 
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR20G05qnsm2xNIP0-wI7SQpfnMsJ7g14v1Q&usqp=CAU' className='change' /> 
                    </div>
                    WATCH 
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )
    }
    
    export default HomeCard
