import  React,  { Component }  from  "react";
// import logo from './logo.svg';
import './App.css';

import Button from './Button'
import buttonListWithMap from './ButtonListWithMap'
import Profile from './Profile'

//const buttonText = "Ide klikkelj!";

function Container(props) { 
  return (
	<div id="container">{props.children}</div>
	);
};

const buttonList = (props) => {
	let rows = [];

	for (let i = 0; i < 10; i++) {
		rows.push(<Button text={props.text} key={i} />);		
	}

}

export default  class  App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				hely: "Budapest",
				kerulet: "Zugló",
				utca: "Ujvilag",
				irSzam: 1145
    };
	}
	
	changeNameHandler = () => { this.setState({ hely: "Paks" }) };
	render() { 
	return (
		<Container> 
			<h1>Hello {this.state.hely}! </h1>   {/* "Hello Budapest!" */} 
			<button type='button' onClick={this.changeNameHandler}>
				Hely csere!
			</button>   {/*→  "Hello Paks!" */}
		</Container>
		);  
  }
};
  
