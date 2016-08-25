import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
  render() {
    return (
	    <div id="footer">
	    	<div className="container">
				2016 Neil Gebhard
				<a href="https://github.com/neilgebhard/pokemon-react"><i className="fa fa-github-alt" aria-hidden="true"></i></a>
				<a href="mailto:neilgebhard@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
				<a href="https://twitter.com/judobaseball"><i className="fa fa-twitter" aria-hidden="true"></i></a>
				<a href="https://www.linkedin.com/in/neil-gebhard-3a72068a"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
			</div>
		</div>
    );
  }
}

export default Footer;