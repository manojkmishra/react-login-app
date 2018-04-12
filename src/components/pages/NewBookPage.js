import React from "react";
import { Segment } from "semantic-ui-react";
import SearchBookForm from "../forms/SearchBookForm";

class NewBookPage extends React.Component 
{  state = { book: null  }; //--when user searches---it will put all his books in this state
  render() 
  {  return ( <Segment><h1>Add new book to your collection</h1> <SearchBookForm/>    </Segment>
           );
  }
}

export default NewBookPage;