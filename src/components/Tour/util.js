const paginate = (Tour) => {
  const itemsPerPage = 2
  const numberOfPages = Math.ceil(Tour.length / itemsPerPage)

  const newTour = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return Tour.slice(start, start + itemsPerPage)
  })

  return newTour
}

export default paginate
