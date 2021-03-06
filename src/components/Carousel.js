import React, { Component } from 'react'

require('../styles/carousel.css')

export default class Carousel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentImageIdx: 0
    }
    this.changeSlide = this.changeSlide.bind(this)
  }

  changeSlide () {
    this.setState({
      currentImageIdx:
        this.props.images.length - 1 === this.state.currentImageIdx
          ? 0
          : this.state.currentImageIdx + 1
    })
  }

  render () {
    return (
      <div className='carouselcontent-container'>
        <a className='carouselcontent' onClick={this.changeSlide} tabIndex={-1}>
          {this.props.images.map((image, index) => (
            <img
              src={image.src}
              key={image.key}
              className={this.state.currentImageIdx === index ? 'active' : ''}
              draggable={false}
            />
          ))}
          <span className={`carouselbutton${this.props.device}`}>
            <img src='../../images/right-arrow.svg' />
          </span>
        </a>
      </div>
    )
  }
}
