import { editBook } from "../api.js"

export const detailPageRendering = (data) => {
  const h1 = document.querySelector('h1')
  const tds = document.querySelectorAll('td')
  
  h1.textContent = data.name
  tds[0].textContent = 'Жанры:'
  tds[1].textContent = Array(data.genres)
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

  const likeBtn = document.querySelector('.like-btn')
  console.log(likeBtn)
  likeBtn.addEventListener('click', () => {
    let like = null

    if (data.isFavorite) {
      like = `
      <svg class="svg" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.3762 2.5401C18.5386 0.825205 16.1258 -0.577889 13.3191 0.239024C11.9779 0.625491 10.8078 1.45428 9.99986 2.58999C9.19192 1.45428 8.02178 0.625491 6.68062 0.239024C3.86771 -0.565417 1.46111 0.825205 0.623483 2.5401C-0.55169 4.94095 -0.0641182 7.64113 2.0737 10.5658C3.74894 12.8544 6.14304 15.1742 9.61856 17.8681C9.72839 17.9536 9.86369 18 10.003 18C10.1423 18 10.2776 17.9536 10.3874 17.8681C13.8567 15.1804 16.257 12.8793 17.9323 10.5658C20.0638 7.64113 20.5514 4.94095 19.3762 2.5401Z"
          fill="red" 
        />
      </svg>`
    }
    else{
      like = `
      <svg class="svg" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.3762 2.5401C18.5386 0.825205 16.1258 -0.577889 13.3191 0.239024C11.9779 0.625491 10.8078 1.45428 9.99986 2.58999C9.19192 1.45428 8.02178 0.625491 6.68062 0.239024C3.86771 -0.565417 1.46111 0.825205 0.623483 2.5401C-0.55169 4.94095 -0.0641182 7.64113 2.0737 10.5658C3.74894 12.8544 6.14304 15.1742 9.61856 17.8681C9.72839 17.9536 9.86369 18 10.003 18C10.1423 18 10.2776 17.9536 10.3874 17.8681C13.8567 15.1804 16.257 12.8793 17.9323 10.5658C20.0638 7.64113 20.5514 4.94095 19.3762 2.5401Z"
          fill="#B1B1B1" 
        />
      </svg>`
    }

    let favoritValue = null

    data.isFavorite === true 
    ? favoritValue = false
    : favoritValue = true

    let newBook = {
      name: data.name,
      author: data.author,
      publishYear:  Number(data.publishYear),
      publishHouse: data.publishHouse,
      pagesNumber: Number(data.pagesNumber),
      genres: Array(data.genres),
      originalLanguage: data.originalLanguage,
      isFavorite: favoritValue
    }
    
    editBook(newBook, data.id)
    // location.reload()

  })
}