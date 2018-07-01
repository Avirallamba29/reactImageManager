import React, { Component } from 'react';
import DragSortableList from 'react-drag-sortable'
import './App.css';
import SimpleReactFileUpload from './inputFile.js'

var placeholder = (
    <div className="placeholderContent"></div>
);
 
var indents = [];
for (var i = 1; i < 35; i++) {
  var obj = {content:(<SimpleReactFileUpload/>), classes:['reactSort']}
  indents.push(obj);
}
 
class SortableComponent extends Component {
  onSort(sortedList) {
     //console.log("sortedList", sortedList);
  }
  render() {
    return (
      <DragSortableList items={indents} placeholder={placeholder} dropBackTransitionDuration={0.3} onSort={this.onSort} type="grid"/>
    );
  }
}



export default SortableComponent;