import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allBooksSelector } from "../../reducers/books";
import AddBookCtA from "../ctas/AddBookCtA";

//books: allBooksSelector(state) in fn mapstatetoprops--should be an array---
//---then we check its length--books.length === 0 if its 0---then we addbookcta
const DashboardPage = ({isConfirmed, books}) => 
(    <div>    {!isConfirmed && <ConfirmEmailMessage />}  { books.length === 0 && <AddBookCtA /> }  </div>  );

DashboardPage.propTypes = {  isConfirmed: PropTypes.bool.isRequired ,
                             books: PropTypes.arrayOf( PropTypes.shape({ title: PropTypes.string.isRequired  }).isRequired
                                                     ).isRequired 
                            };  //this will be required

function mapStateToProps(state) 
{  console.log('/pages/dashboard--!!state.user.confirmed=', !!state.user.confirmed);
     return {        isConfirmed: !!state.user.confirmed,  books: allBooksSelector(state)   }; 
}

export default connect(mapStateToProps)(DashboardPage);