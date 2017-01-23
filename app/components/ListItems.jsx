import React, { Component } from 'react';
import TodoItem from './TodoItem.jsx'

class ListItems extends Component {
	constructor (props) {
		super(props)
	} 


render() {

	const listItems = this.props.items.map((item, index) => 
		<TodoItem item={item} key={index} index={index} deleteItem={this.props.deleteItem} doneItem={this.props.doneItem} />

	);
	
	return ( 
		<ol>{listItems}</ol>
		)
	}	
}


export default ListItems;