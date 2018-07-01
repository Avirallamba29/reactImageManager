import React, { Component } from 'react';
import './App.css';
class SimpleReactFileUpload extends Component {

  constructor(props) {
    super(props);
    var sectionStyle = {
		  background: "#ddd"
	  };
    this.state ={
      file:sectionStyle,
    }
    this.onChange = this.onChange.bind(this)
  }
  _handleClick(e) {
      var inputField = this.refs.fileField;
      inputField.click()
  }
  onChange(e) {
    if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
          	var sectionStyle = {
    			 	 backgroundImage: "url(" + e.target.result  + ")"
    				};
            this.setState({file: sectionStyle});
            };
            reader.readAsDataURL(e.target.files[0]);
        }
  }
  

  render() {
    return (
    	<div className="dragElem" onClick={this._handleClick.bind(this)}>
	    	<div className="inputFileCover" style={this.state.file} ></div>
	        <input className="inputFile" ref="fileField" accept=".jpg,.jpeg,.png" type="file" style={this.state.backgroundImage}  onChange={this.onChange} />
        </div>
   )
  }
}



export default SimpleReactFileUpload