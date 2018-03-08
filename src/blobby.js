import React, {Component} from 'react'
// import { Link , Redirect, withRouter} from 'react-router-dom'
// import ReactDOM from 'react-dom'
// import Anime from 'react-anime'
import anime from 'animejs'

require('./styles/blobby.css')


// **************************** helper functions  **************************************************

// equation of a line
  const lineEq = (y2, y1, x2, x1, currentVal) => {
    const m = (y2 - y1) / (x2 - x1)
    const b = y1 - m * x1
    return m * currentVal + b
  }


// from http://www.quirksmode.org/js/events_properties.html#position
  // const getMousePos = (e) => {
  //   console.log("THIS IS THE EVENT INSIDE GETMOUSE POS", e)

  //   let posx = 0
  //   let posy = 0
  //   if (!e) {let e = window.event}
  //   if (e.pageX || e.pageY)   {
  //     posx = e.pageX
  //     posy = e.pageY
  //   }
  //   else if (e.clientX || e.clientY)  {
  //     posx = e.clientX + document.body.scrollLeft
  //       + document.documentElement.scrollLeft;
  //     posy = e.clientY + document.body.scrollTop
  //       + document.documentElement.scrollTop;
  //   }
  //   return {
  //     x : posx,
  //     y : posy
  //   }
  // }

// From https://davidwalsh.name/javascript-debounce-function.
  function debounce(func, wait, immediate) {
    var timeout
    return function() {
      var context = this, args = arguments
      var later = function() {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

// ******************************************************************************

class Blobby extends Component {

	constructor(props){
    super(props)
    this.state = {
      svgPath: 'M 1066,436 C 1051,543.8 973.2,656.2 873.6,700.1 756.6,751.7 600.9,725 492.4,657.4 431.5,619.5 387.5,546.9 376.7,476 360.3,368.3 377.9,229.2 462.5,160.5 589.5,57.34 815.4,42.24 952.4,131.7 1044,190.8 1081,328.8 1066,436 Z',

      svgPath2: 'M 1041,450.4 C 1023,547.7 992.8,667.7 905.7,714.5 793.1,775 639,728.7 524.5,671.8 453.3,636.4 382.2,575.4 360.2,499 329.7,393 344.6,249.2 426,174.9 568.6,44.66 851.1,-8.71 1002,111.8 1091,182.7 1061,338.6 1041,450.4 Z;M 1066,436 C 1051,543.8 976.5,664.5 873.6,700.1 761,739.1 636.4,655.8 529.5,603.1 441.6,559.8 325.8,520.1 293.8,427.5 263.1,338.4 294.5,213.4 368.2,154.8 520.7,33.48 790.1,23.76 952.4,131.7 1043,191.7 1081,328.8 1066,436 Z;M 1066,436 C 1053,531.1 930.7,580.1 842.2,617.2 734,662.7 598.4,707.8 492.4,657.4 427.6,626.6 387.5,546.9 376.7,476 360.3,368.3 376.9,227.9 462.5,160.5 567.6,77.69 749.9,37.5 863.8,148.8 947.6,230.7 1082,320.1 1066,436 Z',

      // width: window.innerWidth,
      // height: window.innerHeight,
      win: {width: window.innerWidth, height: window.innerHeight},
      started: false,
      // opacity: [0, 1],
      // easing: 'easeInOutSine',
      // duration: 10000,
      // loop: true,
    }
    this.onMouseMoveFn = this.onMouseMoveFn.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
    this.animate = this.animate.bind(this)
    this.getMousePos = this.getMousePos.bind(this)
  }


  updateDimensions () {
      debounce(() => this.setState( {win: {width: window.innerWidth, height: window.innerHeight}}), 20)
      // this.setState({width: window.innerWidth, height: window.innerHeight, win: {width: window.innerWidth, height: window.innerHeight}})
  }

  componentWillMount() {
      this.updateDimensions()
  }

  componentDidMount() {
      window.addEventListener('resize', this.updateDimensions)

    // let toMorph = ReactDOM.findDOMNode(this.refs.morph)
     // console.log(toMorph)

    let pathEl
    let path2

    this.refs.morph && (pathEl = this.refs.morph.querySelector('path'))
        // console.log(path)

        pathEl && (path2 = pathEl.getAttribute('pathdata').split(';'))

        path2 && (path2.push(pathEl.getAttribute('d')))



        // path2 && path2.splice(path2.length-2, 0, pathEl.getAttribute('d'))

        path2 && (path2.push(pathEl.getAttribute('d')))

         // this.setState({svgPath2: path2})
         console.log(this.state.svgPath2)
         this.animate()

    }


  componentWillUnmount () {
      window.removeEventListener('resize', this.updateDimensions)
  }

  animate() {
        anime.remove( this.refs.morph.querySelector('path') )
        anime({
          targets: this.refs.morph.querySelector('path'),
          duration: 10000,
          easing: [0.5, 0, 0.5, 1],
          d: this.refs.morph.querySelector('path').getAttribute('pathdata').split(';'),
          loop: true,
          direction: 'alternate'
        })
  }


   getMousePos(e){
    e.persist()
    console.log("THIS IS THE EVENT INSIDE GETMOUSE POS", e)
    let posx
    let posy

    if (!e) {let e = window.event}
    if (e.pageX || e.pageY)   {
      posx = e.pageX
      posy = e.pageY
    }
    else if (e.clientX || e.clientY)  {
      posx = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
    return {
      x : posx,
      y : posy
    }
  }

  onMouseMoveFn (ev) {
    ev.persist()

    const tilt = {
      tx: this.state.win.width / 8,
      ty: this.state.win.height / 4,
      rz: 45,
      sx: [0.8, 2],
      sy: [0.8, 2]
    }

  requestAnimationFrame(() => {

      if ( !this.state.started ) {
        this.setState({started:true})
        anime({
              targets: this.refs.morph,
              duration: 300,
              easing: 'linear',
              opacity: [0, 1]
            })
      }
      else {
        const mousepos = this.getMousePos(ev)
        console.log(mousepos)

        const rotZ = 2 * tilt.rz / this.state.win.height * mousepos.y - tilt.rz

        const scaleX = mousepos.x < this.state.win.width / 2
          ?
          lineEq(tilt.sx[0], tilt.sx[1], this.state.win.width / 2, 0, mousepos.x)
          :
          lineEq(tilt.sx[1], tilt.sx[0], this.state.win.width, this.state.win.width / 2, mousepos.x)

        const scaleY = mousepos.y < this.state.win.height / 2
          ?
          lineEq(tilt.sy[0], tilt.sy[1], this.state.win.height / 2, 0, mousepos.y)
          :
          lineEq(tilt.sy[1], tilt.sy[0], this.state.win.height, this.state.win.height / 2, mousepos.y)

        const transX = 2 * tilt.tx / this.state.win.width * mousepos.x - tilt.tx
        const transY = 2 * tilt.ty / this.state.win.height * mousepos.y - tilt.ty

        // let newStyle = {transform: `translate3d(${transX}px, ${transY}px,0) rotate3d(0,0,1,${rotZ}deg) scale3d(${scaleX},${scaleY},1)`}

        // this.setState({style: newStyle})

        this.refs.morph.style.transform = `translate3d(${transX}px, ${transY}px,0) rotate3d(0,0,1,${rotZ}deg) scale3d(${scaleX},${scaleY},1)`
      }
  })
}


  render() {
    return (
            <div
            className="Blobby"
            onMouseMove={this.onMouseMoveFn}
            // onMouseMove={ (ev) => {window.requestAnimationFrame( this.onMouseMoveFn(ev))} }
            // onTouchMove={(e)=> {this.onMouseMoveFn(e)}}
            // onDrag={(ev) => {window.requestAnimationFrame( this.onMouseMoveFn(ev))}}
            >
              <div className="content">
                          <svg
                            style={{opacity:0, transition:'transform 2s ease-out'}}
                            // id="morph"
                            ref="morph"
                            // className="scene"
                            width="100%"
                            height="100vh"
                            preserveAspectRatio="none"
                            viewBox="0 0 1440 800"
                          >

                             <defs>
                                <linearGradient id="MyGradient">
                                  <stop offset="5%"  stopColor="green" />
                                  <stop offset="95%" stopColor="gold" />
                                </linearGradient>
                              </defs>

                              <path
                                fill= "url(#MyGradient)"
                                d={this.state.svgPath}
                                pathdata={this.state.svgPath2}
                              />

                          </svg>
                          <h2 className="title">my special test</h2>
              </div>
						</div>
    )
  }
}

export default Blobby

    //   this.DOM = {};
    //   this.DOM.el = el;
    //   this.DOM.el.style.opacity = 0;
    //   this.DOM.el.style.transition = 'transform 2s ease-out';
    //   this.DOM.pathEl = this.DOM.el.querySelector('path');
    //   this.paths = this.DOM.pathEl.getAttribute('pathdata:id').split(';')
    //   this.paths.splice(this.paths.length, 0, this.DOM.pathEl.getAttribute('d'));
    //   this.win = {width: window.innerWidth, height: window.innerHeight};
    //   this.animate();
    //   this.initEvents();
    // }


// onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
// onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
// onMouseMove onMouseOut onMouseOver onMouseUp


//{/ *  */}


// doPathstuff() {
//     this.refs.morph &&{
//     let pathEl = this.refs.morph.querySelector('path')
//     let paths = pathEl.getAttribute('pathdata').split(';')
//     paths.splice(paths.length, 0, pathEl.getAttribute('d'))
//   }
// }

    // document.addEventListener('mousemove', onMouseMoveFn)
    // document.addEventListener('touchstart', onMouseMoveFn)
    // window.addEventListener('resize', ev => onResizeFn())


  // componentDidMount(){
    // console.log(this.state.width, this.state.height)
    // let toMorph = ReactDOM.findDOMNode(this.refs.morph)
     // console.log(toMorph)

    // let pathEl = this.refs.morph.querySelector('path')

    // let paths = pathEl.getAttribute('pathdata').split(';')

    // this.setState({paths: paths})

    // // console.log("PATHS", paths)

    // paths.splice(paths.length, 0, pathEl.getAttribute('d'))

    //   this.animate();
    //   this.initEvents();
  // }
