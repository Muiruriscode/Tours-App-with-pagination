import React from 'react'
import { useState } from 'react'
import { useGlobalContext } from './context'

const Tour = ({ id, image, name, info, removeTour }) => {
  const { remove } = useGlobalContext()
  const [readMore, setReadMore] = useState(false)

  return (
    <div className='px-5 md:px-20'>
      <h2 className=' text-3xl text-bold text-blue-500 text-center my-5 text-bold'>
        {name}
      </h2>
      <div className='overflow-hidden'>
        <img
          src={image}
          alt={name}
          className='object-top mx-auto mt-1 mb-2 object-cover'
          width='70%'
          height='50px'
        />
      </div>
      <p>
        {readMore ? info : `${info.substring(0, 150)}...`}
        <button
          className='ml-2 px-2 rounded-md shadow-lg bg-blue-400'
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>

      <button
        className='transition duration-700 transform ease-in-out px-2 rounded-md shadow-lg bg-red-500  text-md float-right cursor-pointer hover:-translate-y-1'
        onClick={() => remove(id)}
      >
        Remove Tour
      </button>
      <br />
      <br />
      <br />
      <hr />
    </div>
  )
}

export default Tour
