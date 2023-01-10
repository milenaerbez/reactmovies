import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { homeData } from "../../Podaci"
import "./style.css"


export const SinglePage = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)
  
    useEffect(() => {
      let item = homeData.find((item) => item.id === parseInt(id))
      if (item) {
        setItem(item)
      }
    }, [id])
 
  
    return (
      <>
        {item ? (
          <>
            <section className='singlePage'>
              <div className='singleHeading'>
                <h1>{item.name} </h1> <span> | {item.time} | </span> <span> HD </span>
              </div>
              <div className='container'>
                <video src={item.video} controls></video>
                <div className='para'>
                  <h3>Date : {item.date}</h3>
                  <p>{item.desc}</p>
                  
                </div>
                <div className='soical'>
                  <h3>Share : </h3>
                  <img src='https://img.icons8.com/color/48/000000/facebook-new.png' />
                  <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' />
                  <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' />
                </div>
              </div>
            </section>
        
          </>
        ) : null
          
        }
      </>
    )
  }
  
