import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

class TodoItem extends Component {
	constructor (props) {
		super(props)
		this.handleChangeSubmit = this.handleChangeSubmit.bind(this);
		this.handleDoneSubmit = this.handleDoneSubmit.bind(this);
		console.log(props)
	}

handleChangeSubmit(e) {
	e.preventDefault();
	this.props.deleteItem(this.props.index)
	}

handleDoneSubmit(e)	 {
	e.preventDefault();
	this.props.doneItem(this.props.index)
}

render() {

	const style = {
	margin: 8,
	}

	return (

		<MuiThemeProvider>
			<li>
			 	{this.props.item.name}
				<br/>
				<RaisedButton label="Completed" onClick={this.handleDoneSubmit} style={style} />
				<RaisedButton label="Delete" onClick={this.handleChangeSubmit} secondary={true} style={style} />  
			</li>
		</MuiThemeProvider>
		);
	}
}

export default TodoItem