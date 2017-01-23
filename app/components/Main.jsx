import React, { Component } from 'react';
import Form from './Form';
import ListItems from './ListItems';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

injectTapEventPlugin();

class Main extends Component {

	constructor(){
		super();
		this.state = {items: []};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.doneItem = this.doneItem.bind(this);
	}

	updateLocalStorage(items) {
		localStorage['items']=JSON.stringify(items);
	}

	addItem(item) {
		this.setState({items: [...this.state.items, {name: item, done: false,}]}, () => this.updateLocalStorage(this.state.items));
	}

	deleteItem(index) {
		this.state.items.splice(index,1)
		this.setState({items: this.state.items}, () => this.updateLocalStorage(this.state.items));
	}

	doneItem(index) {
		this.state.items[index].done = true; 
		this.setState({items: this.state.items}, () => this.updateLocalStorage(this.state.items));
		console.log('doneItem'+ index);
		// console.log(this.state.items[index])
	}

	componentDidMount() {
		if(localStorage['items'].length > 0) {
			this.setState({items:JSON.parse(localStorage['items'])})
			console.log(JSON.parse(localStorage['items']))
		}
	}
	
	render() {

		return (
					<div>
						<Form addItem = {this.addItem} />
						<ListItems items = {this.state.items} deleteItem={this.deleteItem} doneItem={this.doneItem} />
					</div>
			)
	}
}


export default Main;



