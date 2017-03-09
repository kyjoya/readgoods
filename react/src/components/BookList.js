import React, { Component } from 'react';
import BookListItem from './BookItem';

class BookList extends Component {
  constructor(props) {
  super(props)
    this.state = {
      books: [],
    }
    this.getData = this.getData.bind(this);
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
    let newBooks = this.state.books.map((book, index) => {
      return (
        <BookListItem
          id={book.id}
          key={book.id}
          title={book.title}
          author={book.author}
        />
      )
    });

    return(
      <div className="book-index">
        <h2>Readsgood</h2>
        {newBooks}
      </div>
    )
  }
};

export default BookList;
