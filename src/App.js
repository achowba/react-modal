import React, { Component } from 'react';

import Modal from './components/Modal/Modal';

class App extends Component {

	constructor() {
		super();

		this.state = {
			isShowing: false
		}
	}

	openModalHandler = () => {
		this.setState({
			isShowing: true
		});
	}

	closeModalHandler = () => {
		this.setState({
			isShowing: false
		});
	}

	render () {
		return (
			<div>
				{ this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

				<button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

				<Modal
					className="modal"
					show={this.state.isShowing}
					close={this.closeModalHandler}>
						Maybe aircrafts fly very high because they don't want to be seen in plane sight?
				</Modal>
			</div>
		);
	}
}

export default App;
