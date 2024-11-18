import React, { useEffect, useState } from 'react'
import './Hero.css'


const Hero = () => {

      
  const [load, setLoad] = useState(true)

  const [data,setData] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          setLoad(!load)
        })
    }, [])

  return (
    <>

    <section className="hero">
        <div className="container">
            <div className="hero__wrapper">

            {load ? (
                <h1 className="load">загрузка данных...</h1>
            ) : 
            (
                <>
                {data.map((post)  => (
                  <div key={post.id} className="hero-card">
                    <h1>{post.title}</h1>
                    <img src={post.image} alt="" />
                    <h5>{post.price}</h5>
                    <p>{post.description}</p>
                    <h3>{post.category}</h3>
                   
                    <div className="raiting">
                        <p>{post.rate}</p>
                        <p>{post.count}</p>  
                    </div>
                    </div>
                    ))}
                </>
            )
            }

            </div>
        </div>
    </section>
        
    </>
  )
}

export default Hero