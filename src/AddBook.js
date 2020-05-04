import React from 'react'
import {Link} from 'react-router-dom'
import serializeForm from 'form-serialize'
import * as BooksAPI from './BooksAPI'
import SearchDisplay from './SearchDisplay'
//import { UncontrolledAlert } from 'reactstrap';

class AddBook extends React.Component{

  state = {
    books: [],
    emptyQuery: true
  }
  //Show search results if query is correct
  handleSubmit = (e) => {
    e.preventDefault()
    const value = serializeForm(e.target, { hash: true })
    BooksAPI.search(value.search)
      .then((books) => {
        console.log(books)
          if(typeof books === 'undefined' || books.error === "empty query"){
            this.setState(() => ({
              emptyQuery: true,
              books: []
            }))
          }
          else{
            books.forEach((book) =>
              book.shelf = "none"
            )
            this.setState(() => ({
              books,
              emptyQuery:false,
            }))
          }
        })
  }
  //Remove search display if input becomes empty
  emptySearch = (e) => {
    if(e.target.value === ''){
      this.setState(() => ({
        emptyQuery: true,
        books: []
      }))
    }
  }

  updateBooks = (book,shelf) => {
    BooksAPI.update(book,shelf)
  }

  //TODO:: Work on Alert
  // <UncontrolledAlert color="danger">
  //   No books found with that keyword
  // </UncontrolledAlert>

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>
            Close
          </Link>
          <form onChange={this.emptySearch} onSubmit={this.handleSubmit}>
            <div className="search-books-input-wrapper">
              <input type="text" name='search' placeholder="Search by Genre"/>
            </div>
          </form>
        </div>
        {
          this.state.empty ?
              <div>
              </div>
            : <SearchDisplay books={this.state.books} updateBooks={this.updateBooks}/>
        }
      </div>
    )
  }
}

export default AddBook
