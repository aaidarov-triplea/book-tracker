
export const detailPageRendering = (data) => {
  const h1 = document.querySelector('h1')
  const tds = document.querySelectorAll('td')
  
  h1.textContent = data.name
  tds[0].textContent = 'Жанры:'
  tds[1].textContent = data.genres
  tds[2].textContent = 'Автор:'
  tds[3].textContent = data.author
  tds[4].textContent = 'Год выпуска:'
  tds[5].textContent = Number(data.publishYear)
  tds[6].textContent = 'Язык оригинала:'
  tds[7].textContent = data.originalLanguage
  tds[8].textContent = 'Издательство:'
  tds[9].textContent = data.publishHouse
  tds[10].textContent = 'Колличество страниц:'
  tds[11].textContent = Number(data.pagesNumber)

  return data
  }
