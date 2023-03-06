
const createApiRoute = (route) => {
  return (resource, id) => {
    return `${route}${resource}${id ? '/' : ''}${id || ''}`
  }
}

let URL = createApiRoute('http://localhost:1717')

export const getBooks = async () => {
  const response = await fetch(URL('/books'))
  const books = await response.json()
  return books
}

export const getDetailsBook = async(id) => {
  const response = await fetch(URL(`/books/detail/${ id }`, ))
  const detailsBook = await response.json()
  return detailsBook
}

export const createNewBook = async (newBook) => {
  const response = await fetch(URL(`/books/create`), {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBook)
  })
  return response.json()
}

export const editBook = async (newBook, id) => {
  const response = await fetch(URL(`/books/update/${id}`), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBook),
  })
  return response.json()
}

export const deleteBook = async (id) => {
  const response = await fetch(URL(`/books/delete/${id}`), {
    method: 'DELETE'
  })
  return response.json()
}