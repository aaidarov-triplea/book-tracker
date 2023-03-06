import { getDetailsBook } from "./api.js";
import { detailPageRendering } from "./creator/detail-page-render.js";
import { deleteBook } from "./api.js";

const id = new URLSearchParams(window.location.search).get('id')

document.querySelector('.book-detail a').setAttribute('href', `/edit.html?id=${id}`)

getDetailsBook(id)
.then((data) => {
  detailPageRendering(data)
  console.log(detailPageRendering(data))

  const btnLike = document.querySelectorAll('.like-btn')
  console.log(btnLike)
  
  const deleteBtn = Array.from(document.querySelectorAll('.delete-btn'))
  deleteBtn[0].addEventListener('click', () => {
    deleteBook(id)
    location.href = 'index.html'
  })

})
.catch((err) => {
  console.log(err)
})