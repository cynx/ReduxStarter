/**
 * Created by echosteg on 17/01/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map(book => {
            return (
                <li key={book.title} className="list-group-item" onClick={()=>this.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-xs-4">
                {this.renderList()}
            </ul>
        );

    }
}

function mapStateToProps(state){
    //whatever is returned from here will show up as props in book list
    return {
        books: state.books
    };
}

//anything return from this function will end as props in the book list container
function mapDispatchToProps(dispatch){
    //when select book is called, result is passed to all reducers
return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container, it needs to know about dispatch method
export default connect(mapStateToProps, mapDispatchToProps)(BookList);