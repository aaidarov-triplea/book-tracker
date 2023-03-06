import { getDetailsBook } from "./api.js";
import { editBook } from './api.js'


const id = new URLSearchParams(window.location.search).get('id')

getDetailsBook(id)
.then((data) => {
  const saveBtn = document.querySelector('#save-edit-btn')

  const [name, author, publish, publishHouse, pages, genres, language] =
  ['name', 'author', 'publishYear', 'publishHouse', 'pagesNumber', 'genres', 'originalLanguage']
  .map((name) => document.querySelector(`#${name}`))
    name.value = data.name
    author.value = data.author
    publish.value = Number(data.publishYear)
    publishHouse.value = data.publishHouse
    pages.value = Number(data.pagesNumber)
    genres.value = Array(data.genres)
    language.value = data.originalLanguage

    let newBook = {
      "name": name.value,
      "author": author.value,
      "publishYear":  Number(publish.value),
      "publishHouse": publishHouse.value,
      "pagesNumber": Number(pages.value),
      "genres": Array(genres.value),
      "originalLanguage": language.value
    }
    saveBtn.addEventListener('click', (e) => {
      e.preventDefault()
     editBook(newBook, id)
      console.log(editBook(newBook, id))
      location.href = 'index.html'
    })
})
.catch(() => {
  console.log('error')
})