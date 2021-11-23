import React, { Component } from 'react';
import '../cv_img/style.css';

import 'react-image-lightbox/style.css'; 

export default class CRI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    return (<p>idk meh</p>)
  }
}