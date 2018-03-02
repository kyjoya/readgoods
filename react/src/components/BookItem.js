import React from 'react';

const BookListItem = (props) => {
  return(
    <div className="list-item text-center small-4 columns">
      <h1>{props.title}</h1>
      <p>{props.author}</p>
    </div>
  )
}

export default BookListItem;
