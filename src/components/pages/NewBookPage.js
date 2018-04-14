import React from "react";
import { Segment } from "semantic-ui-react";
import SearchBookForm from "../forms/SearchBookForm";
import BookForm from "../forms/BookForm";
import axios from "axios";
import PropTypes from "prop-types";
import { createBook } from "../../actions/books";
import { connect } from "react-redux";

class NewBookPage extends React.Component 
{  state = { book: null  }; //--when user searches---it will put all his books in this state
   onBookSelect = book => 
   { this.setState({ book });
     axios.get(`/api/books/fetchPages?goodreadsId=${book.goodreadsId}`)
          .then(res => res.data.pages)
          .then(pages => this.setState({ book: { ...book, pages } }));
   };

   addBook = (book) =>this.props.createBook(book).then(() => this.props.history.push("/dashboard"));
  render() 
  {  return ( <Segment><h1>Add new book to your collection</h1> 
                  <SearchBookForm onBookSelect={this.onBookSelect}/>  
                    {this.state.book && (  <BookForm submit={this.addBook} book={this.state.book} />   )}
              </Segment>
           );
  }
}

NewBookPage.propTypes = 
{  createBook: PropTypes.func.isRequired,
    history: PropTypes.shape({  push: PropTypes.func.isRequired  }).isRequired
};

export default connect(null, { createBook })(NewBookPage);