import React, { useEffect, useState } from 'react'
import Tour from './Tour'
import { useGlobalContext } from './context'

const getStorageTheme = () => {
  let theme = 'dark-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

const Tours = () => {
  const [tours, setTours] = useState([])
  const [theme, setTheme] = useState(getStorageTheme())
  const [page, setPage] = useState(0)

  const { isLoading, data } = useGlobalContext()

  useEffect(() => {
    if (isLoading) return
    setTours(data[page])
  }, [isLoading, page, data])

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  const handleSubmit = (index) => {
    setPage(index)
  }

  if (isLoading || data.length < 1) {
    return (
      <h2 className='text-xl text-center mt-20'>
        There are no current tours...
      </h2>
    )
  }
  return (
    <>
      {data.length !== 0 && (
        <section className='container'>
          <button
            className='fixed right-2 top-5 bg-blue-400 px-3 rounded-sm shadow-lg lg:font-semibold py-1 opacity-90 cursor-pointer hover:opacity-100 z-10'
            onClick={toggleTheme}
          >
            {theme === 'light-theme' ? 'Dark' : 'Light'}
          </button>
          <p className='text-center text-xl'>
            Here are all the current available tours
          </p>
          <div className='grid grid-cols-1justify-center mx-auto'>
            {tours.map((tour) => (
              <Tour key={tour.id} {...tour} />
            ))}

            <div className='flex justify-center items-center py-5'>
              <div>
                <button
                  className='rounded-lg font-semibold px-2 py-1 mx-2 outline'
                  onClick={() => prevPage()}
                >
                  PrevPage
                </button>
              </div>
              <div className='flex justify-center'>
                {data.map((item, index) => (
                  <button
                    key={index}
                    className={`bg-blue-400 mx-2 rounded-full py-1 px-3 ${
                      page === index && 'bg-blue-600'
                    }`}
                    onClick={() => handleSubmit(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div>
                <button
                  className='rounded-lg px-2 py-1 mx-2 font-semibold outline'
                  onClick={() => nextPage()}
                >
                  Next Page
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Tours
