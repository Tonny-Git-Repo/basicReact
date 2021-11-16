import React from 'react'
import { Book, BookClass } from './Book'
import { books } from '../data/books'

export const BookList = () => {
  const [someState, setSomeState] = React.useState(new Date())
  const onBookListHeaderClick = () => {
    console.log('onBookListHeaderClick has been clicked')
    setSomeState(new Date())
  }
  console.log('BookList render method has been invoked')
  return (
    <section className="book-list">
      <h1 className="book-list-header" onClick={onBookListHeaderClick}>
        Super Books {someState.toString()}
      </h1>
      {books.map((book) => {
        return <Book key={book.id} book={book} /> //spread Operator dosn't work: book = {...book}
      })}
    </section>
  )
}
