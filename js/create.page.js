import { createNewBook } from './api.js'

const [name, author, publish, publishHouse, pages, genres, language] =
  ['name', 'author', 'publishYear', 'publishHouse', 'pagesNumber', 'genres', 'originalLanguage']
    .map((name) => document.querySelector(`#${name}`))

    const saveBtn = document.querySelector('#save-create-btn')
    saveBtn.addEventListener('click', (e) => {
  e.preventDefault()

  let newBook = {
    "name": name.value,
    "author": author.value,
    "publishYear":  Number(publish.value),
    "publishHouse": publishHouse.value,
    "pagesNumber": Number(pages.value),
    "genres": Array([genres.value]),
    "originalLanguage": language.value
  }

  createNewBook(newBook)
  location.href = 'index.html'
})