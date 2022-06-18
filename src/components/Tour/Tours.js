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
  console.log(data)

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
  if (isLoading) {
    return <h1 className='text-xl text-center mt-20'>Loading...</h1>
  }

  if (!isLoading && data.length < 1) {
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
            className='fixed right-2 top-5 px-3 rounded-sm lg:font-semibold py-1 opacity-90 cursor-pointer hover:opacity-100 z-10'
            onClick={toggleTheme}
          >
            {theme === 'light-theme' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              </svg>
            )}
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
                      page === index && 'bg-blue-600 text-white'
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
