import React, {Component} from 'react'
import anime from 'animejs'
import {Link} from "react-router-dom"
require('../styles/blobby.css')

// **************************** helper function **************************************************
// equation of a line
  const lineEq = (y2, y1, x2, x1, currentVal) => {
    const mm = (y2 - y1) / (x2 - x1)
    const bb = y1 - (mm * x1)
    return (mm * currentVal + bb  ) * .8
    // i add the .8 above
  }
// ******************************************************************************

class Blobby extends Component {

  constructor(props){
    super(props)
    this.state = {
      win: {width: window.innerWidth, height: (window.innerHeight - (window.innerHeight / 10))},
      started: false
    }
    this.onMouseMoveFn = this.onMouseMoveFn.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
    this.animate = this.animate.bind(this)
    this.getMousePos = this.getMousePos.bind(this)
    this.getRandomArbitrary = this.getRandomArbitrary.bind(this)
    this.getRandomScale = this.getRandomScale.bind(this)
  }


  updateDimensions () {
      this.setState({win: {width: window.innerWidth, height: (window.innerHeight - (window.innerHeight / 10)) }})
      console.log(this.state.win)
  }

  componentWilMount () {
      this.updateDimensions()
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
    let pathEl
    let path2
    this.refs.morph2 && (pathEl = this.refs.morph2.querySelector('path'))
    pathEl && (path2 = pathEl.getAttribute('pathdata').split(';'))
    path2 && (path2.push(pathEl.getAttribute('d')))
    this.animate()
  }


  componentWillUnmount () {
      window.removeEventListener('resize', this.updateDimensions)
  }

  animate() {
        anime.remove( this.refs.morph2.querySelector('path') )
        anime({
          targets: this.refs.morph2.querySelector('path'),
          duration: 10000,
          easing: [0.5, 0, 0.5, 1],
          // rotate: 10,
          d: this.refs.morph2.querySelector('path').getAttribute('pathdata').split(';'),
          loop: true,
          direction: 'alternate',
          // scale: .5
        })
  }




  getMousePos(evt) {
    let CLIENTX
    let CLIENTY
    const boundingRect = this.refs.moveArea.getBoundingClientRect()

    if (evt.type === "touchstart") {
      CLIENTX = evt.touches[0].clientX
      CLIENTY = evt.touches[0].clientY
    }

    if (evt.type === "mousedown"){
      CLIENTX = evt.clientX
      CLIENTY = evt.clientY
    }

     if (evt.type === "touchmove"){
      CLIENTX = evt.touches[0].clientX
      CLIENTY = evt.touches[0].clientY
    }

    if (evt.type === "mousemove"){
      CLIENTX = evt.clientX
      CLIENTY = evt.clientY
    }

    let coordObj= {
      x: CLIENTX - boundingRect.left,
      y: CLIENTY - boundingRect.top,
    }
    return coordObj
  }

getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

getRandomScale( ){
 return Math.floor(this.getRandomArbitrary(0.7, 0.98)*100)/100
}

  onMouseMoveFn (ev) {
    ev.persist()

    const WWid= this.state.win.width
    const WHei= this.state.win.height

    let aspectRatioX = 1
    let aspectRatioY = 1

      if (WWid > WHei){
        aspectRatioY =  (WHei/WWid)
        aspectRatioX =  1-(WHei/WWid)
      }
      if (WWid < WHei){
        aspectRatioX =  (WWid/WHei)
        aspectRatioY =  1-(WWid/WHei)
      }

    const tilt = {
      tx: WWid,
      ty: WHei,
      rz: 45,
      sx: [0.8, 2],
      sy: [0.8, 2]
    }

    requestAnimationFrame(() => {
        if ( !this.state.started ) {
          this.setState({started: true})
          anime({
                targets: this.refs.morph2,
                duration: 500,
                easing: 'linear',
                opacity: [0, 1],
                // scale: .5
              })
        }
        else {
          const mousepos = this.getMousePos(ev)

          const rotZ = 2 * tilt.rz / WHei * mousepos.y - tilt.rz

          const scaleX = mousepos.x < WWid / 2
            ?
            lineEq(tilt.sx[0], tilt.sx[1], WWid / 2, 0, mousepos.x)
            :
            lineEq(tilt.sx[1], tilt.sx[0], WWid, WWid / 2, mousepos.x)

          const scaleY = mousepos.y < WHei / 2
            ?
            lineEq(tilt.sy[0], tilt.sy[1], WHei / 2, 0, mousepos.y)
            :
            lineEq(tilt.sy[1], tilt.sy[0], WHei, WHei / 2, mousepos.y)

          let transX =  2* tilt.tx / WWid * mousepos.x - tilt.tx
          let transY =  2* tilt.ty / WHei * mousepos.y - tilt.ty

              // this.refs.morph2.style.transform = `translate3d(${transX}px, ${transY}px,0) scale3d(${scaleX*.5},${scaleY*.5},1) rotate3d(0,0,1,${rotZ}deg)`

              // this.refs.morph2.style.transform = `translate3d(${transX}px, ${transY}px,this.getRandomScale() ) scale(${this.getRandomScale()}) rotate3d(0,0,1,${rotZ}deg)`

              // this.refs.morph2.style.transform = `translate3d(${transX}px,${transY}px,0) rotate3d(${transX},${transY},1,${rotZ}deg) `

              // this.refs.morph2.style.transform = `translate3d(${transX}px, ${transY}px,0) rotate3d(0,0,1,${rotZ}deg) scale3d(${scaleX*.8},${scaleY*.8},1)`

              // this.refs.morph2.style.transform = `translate3d(${transX}px,${transY}px,0) rotate3d(0,0,1,${rotZ}deg) scale3d(${(scaleX)},${(scaleY)},1)`

           this.refs.morph2.style.transform = `translate3d(${transX}px,${transY}px,0) rotate3d(0,0,1,${rotZ}deg) scale3d(${scaleX},${scaleY},1)`
        }
    })
  }



  render() {


  const styles = {
    // backgroundImage: "url(/images/ME.jpg)",
    // backgroundImage: "url(/images/GOWANUS.jpg)",
    // filter: "grayscale(100%)",
    backgroundImage: "url(/images/kbride.gif), url(/images/kbbeermovie.gif)",
    backgroundRepeat:"no-repeat",
    clipPath: 'url(#blobClip)',
    WebkitClipPath: 'url(#blobClip)',
    backgroundSize: 'cover',
    position: "relative",
    top: '10vh',
    height: "90vh",
    opacity: "0.8",
    WebkitTransformStyle: "preserve-3d",
  }

    return (
            <div ref="moveArea"
              id="outter"
              onMouseMove={this.onMouseMoveFn}
              onTouchMove={this.onMouseMoveFn}
            >

              <div id="outterText">
                  <Link to="/work">
                    <p>
                    Hi I'm Kat, and I'm a<br/> Software Developer.
                    </p>
                  </Link>
              </div>

            <div className="shadow">
              <div id="inner" style={styles}>

               <div id="innerText">
                  <p>
{/*    HI, I'M KAT, AND I'M A <br/>SOFTWARE DEVELOPER.  */}
                   Hi I'm Kat, and I'm a<br/> Software Developer.
                  </p>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{opacity: 0, transition: 'transform 2s ease-out'}}
                  id="svgoutter"
                  ref="morph"
                  preserveAspectRatio="none"
                  viewBox="0 0 1 1"
                  overflow="visible"
                >

                <defs>
                    <clipPath
                      ref="morph2"
                      id="blobClip"
                      clipPathUnits="objectBoundingBox"
                      style={{transformOrigin:"center"}}

                    >
                      <path
                      id="path"
                      d= "M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526Z"

                      pathdata="M  0.883 0.543 C 0.869 0.667 0.733 0.731 0.634 0.779 0.514 0.839 0.363 0.898 0.246 0.832 0.174 0.792 0.129 0.688 0.117 0.595 0.099 0.455 0.117 0.271 0.212 0.183 0.329 0.075 0.532 0.023 0.658 0.168 0.752 0.275 0.901 0.392 0.883 0.543 Z;M 0.929 0.526C 0.913 0.667 0.83 0.824 0.715 0.871 0.59 0.922 0.452 0.813 0.333 0.744 0.235 0.688 0.106 0.636  0.071 0.515 0.037 0.399 0.072 0.236 0.154 0.159 0.323 0.001 0.623 0.00 0.803 0.129 0.904 0.207 0.946 0.386 0.929  0.526 Z;M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526 Z"
                      />
                    </clipPath>
                </defs>

                </svg>
              </div>
            </div>
          </div>
    )
  }
}

export default Blobby
