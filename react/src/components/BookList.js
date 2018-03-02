import React, { Component } from 'react';
import BookListItem from './BookItem';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  getData() {
    fetch('http://localhost:3000/api/v1/books.json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} ($response.statusText)`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({books: body["books"]});
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    let books = this.state.books.map(book => {
      return(
        <BookListItem
          key={book.id}
          title={book.title}
          author={book.author}
        />
      )
    })

    return(
      <div className="book-index">
        <h2>Readsgood</h2>
        {books}
      </div>
    )
  }
};

export default BookList;
