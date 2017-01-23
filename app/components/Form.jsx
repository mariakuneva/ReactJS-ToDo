import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';


class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {item: ''}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit (e) {
		e.preventDefault()	
		this.setState({item: ''})
		this.props.addItem(this.state.item)}
	

	handleChange(e) {
		this.setState({item: e.target.value })
	}

	render() {

		return (
		
			<MuiThemeProvider>
				<div>
					<form onSubmit={this.handleSubmit}>
						<TextField hintText="task" value={this.state.item}  onChange={this.handleChange} />
						<FlatButton label="Add" disabled={this.state.item.length === 0 } type="submit"/>
					</form>
				</div>	
			</MuiThemeProvider>			
		);
	}

}
export default Form;

