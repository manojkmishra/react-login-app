import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allBooksSelector } from "../../reducers/books";
import AddBookCtA from "../ctas/AddBookCtA";
import { fetchBooks } from "../../actions/books";

//books: allBooksSelector(state) in fn mapstatetoprops--should be an array---
//---then we check its length--books.length === 0 if its 0---then we addbookcta
class DashboardPage extends React.Component 
{   componentDidMount = () => this.onInit(this.props);
    onInit = props => props.fetchBooks(); //---thunk action to get all the books of this user
    render() 
    { const { isConfirmed, books } = this.props;
      return ( <div> {!isConfirmed && <ConfirmEmailMessage />}
      
                     {books.length === 0 ? <AddBookCtA /> : <p>You have books!</p>}
               </div>
             );
    }
}

DashboardPage.propTypes = 
{   isConfirmed: PropTypes.bool.isRequired ,
    fetchBooks: PropTypes.func.isRequired, //---added at last when converted it dashboard to class from const fun
	books: PropTypes.arrayOf( PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired	).isRequired 
}; 

function mapStateToProps(state) 
{  console.log('/pages/dashboard--!!state.user.confirmed=', !!state.user.confirmed);
     return {        isConfirmed: !!state.user.confirmed,  books: allBooksSelector(state)   }; 
}

export default connect(mapStateToProps, { fetchBooks })(DashboardPage);