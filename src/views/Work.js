import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'

require('../styles/work.css')

export default class Work extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.animate = this.animate.bind(this)
    this.createMorphs = this.createMorphs.bind(this)
  }

  componentDidMount () {
    this.createMorphs()
    this.animate()
  }

  createMorphs () {
    let pathEl1
    let path1
    this.refs.iloveplant &&
      (pathEl1 = this.refs.iloveplant.querySelector('path'))
    pathEl1 && (path2 = pathEl1.getAttribute('pathdata').split(''))
    path1 && path1.push(pathEl1.getAttribute('d'))

    let pathEl2
    let path2
    this.refs.exquisite_graveyard &&
      (pathEl2 = this.refs.exquisite_graveyard.querySelector('path'))
    pathEl2 && (path2 = pathEl2.getAttribute('pathdata').split(''))
    path2 && path2.push(pathEl2.getAttribute('d'))

    let pathEl3
    let path3
    this.refs.d_construction &&
      (pathEl3 = this.refs.d_construction.querySelector('path'))
    pathEl3 && (path2 = pathEl3.getAttribute('pathdata').split(''))
    path3 && path3.push(pathEl3.getAttribute('d'))

    let pathEl4
    let path4
    this.refs.artist_portfolio &&
      (pathEl4 = this.refs.artist_portfolio.querySelector('path'))
    pathEl4 && (path2 = pathEl4.getAttribute('pathdata').split(''))
    path4 && path4.push(pathEl4.getAttribute('d'))
  }

  animate () {
    anime.remove(this.refs.iloveplant.querySelector('path'))
    anime({
      targets: this.refs.iloveplant.querySelector('path'),
      duration: 30000,
      // easing: [0.5, 0, 0.5, 1],
      easing: 'linear',
      // rotate: anime.random(-5,-15),
      d: this.refs.iloveplant
        .querySelector('path')
        .getAttribute('pathdata')
        .split(';'),
      loop: true,
      direction: 'alternate'
      // scale: 0.8
    })

    anime.remove(this.refs.exquisite_graveyard.querySelector('path'))
    anime({
      targets: this.refs.exquisite_graveyard.querySelector('path'),
      duration: 10000,
      // easing: [0.5, 0, 0.5, 1],
      easing: 'linear',
      // rotate: anime.random(5,20),
      d: this.refs.exquisite_graveyard
        .querySelector('path')
        .getAttribute('pathdata')
        .split(';'),
      loop: true,
      direction: 'alternate'
      // scale: 0.8
    })

    anime.remove(this.refs.d_construction.querySelector('path'))
    anime({
      targets: this.refs.d_construction.querySelector('path'),
      duration: 25000,
      // easing: [0.5, 0, 0.5, 1],
      easing: 'linear',
      // rotate: anime.random(5,20),
      d: this.refs.d_construction
        .querySelector('path')
        .getAttribute('pathdata')
        .split(';'),
      loop: true,
      direction: 'alternate'
      // scale: 0.8
    })

    anime.remove(this.refs.artist_portfolio.querySelector('path'))
    anime({
      targets: this.refs.artist_portfolio.querySelector('path'),
      duration: 35000,
      // easing: [0.5, 0, 0.5, 1],
      easing: 'linear',
      // rotate: anime.random(5,9),
      d: this.refs.artist_portfolio
        .querySelector('path')
        .getAttribute('pathdata')
        .split(';'),
      loop: true,
      direction: 'alternate'
      // scale: 0.8
    })
  }

  render () {
    let allProjectsThumbs = []

    let names = [
      'iloveplant',
      'exquisite_graveyard',
      'artist_portfolio',
      'd_construction'
    ]

    for (let i = 0; i < names.length; i++) {
      allProjectsThumbs.push({
        src: `../../images/allProj/${names[i]}.png`,
        link: `/work/${names[i]}`,
        morphId: `${names[i]}`
      })
    }

    const styles = {
      svgStyles: {
        // opacity: 0,
        WebkitTransition: 'transform 2s ease-out',
        transition: 'transform 2s ease-out',
        WebkitBackfaceVisibility: 'hidden',
        BackfaceVisibility: 'hidden',
        overflow: 'hidden'
      },
      defStyles: {
        opacity: 0,
        WebkitTransformOrigin: 'center',
        transformOrigin: 'center',
        WebkitTransition: 'transform 2s ease-out',
        transition: 'transform 2s ease-out',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      }
    }

    return (
      <div className='outterWorkContainer'>
        <p>Recent Work</p>
        <div id='workContainer'>
          {allProjectsThumbs.map((image, index) => {
            let projectName
            let idx
            switch (image.morphId) {
              case 'iloveplant':
                projectName = 'I Love Plant'
                idx = index
                break

              case 'artist_portfolio':
                projectName = 'Artist Portfolio'
                idx = index
                break

              case 'exquisite_graveyard':
                projectName = 'Exquisite Graveyard'
                idx = index
                break

              case 'd_construction':
                projectName = 'D-Construction'
                idx = index
                break

              default:
                projectName = ''
                idx = '0'
                break
            }

            return (
              <div id={image.morphId} key={image.idx}>
                <Link to={image.link}>
                  <img
                    src={image.src}
                    className='projectThumb'
                    draggable={false}
                    style={{
                      position: 'relative',
                      cursor: 'pointer',
                      WebkitClipPath: `url(#${image.morphId}Clip)`,
                      clipPath: `url(#${image.morphId}Clip)`
                    }}
                  />
                </Link>
                <Link id='projTitle' to={image.link}>
                  {projectName}
                </Link>
              </div>
            )
          })}

          <svg
            className='hide'
            xmlns='http://www.w3.org/2000/svg'
            style={styles.svgStyles}
            ref='iloveplant'
            preserveAspectRatio='none'
            viewBox='0 0 1 1'
            overflow='visible'
            key='plantsvg'
          >
            <defs>
              <clipPath
                ref='iloveplantClip'
                id='iloveplantClip'
                clipPathUnits='objectBoundingBox'
                style={styles.defStyles}
              >
                <path
                  d='M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526Z'
                  pathdata='M  0.883 0.543 C 0.869 0.667 0.733 0.731 0.634 0.779 0.514 0.839 0.363 0.898 0.246 0.832 0.174 0.792 0.129 0.688 0.117 0.595 0.099 0.455 0.117 0.271 0.212 0.183 0.329 0.075 0.532 0.023 0.658 0.168 0.752 0.275 0.901 0.392 0.883 0.543 Z;M 0.929 0.526C 0.913 0.667 0.83 0.824 0.715 0.871 0.59 0.922 0.452 0.813 0.333 0.744 0.235 0.688 0.106 0.636  0.071 0.515 0.037 0.399 0.072 0.236 0.154 0.159 0.323 0.001 0.623 0.00 0.803 0.129 0.904 0.207 0.946 0.386 0.929  0.526 Z;M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526 Z'
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className='hide'
            xmlns='http://www.w3.org/2000/svg'
            style={styles.svgStyles}
            ref='exquisite_graveyard'
            id='exquisite_graveyard'
            preserveAspectRatio='none'
            viewBox='0 0 1 1'
            overflow='visible'
          >
            <defs>
              <clipPath
                id='exquisite_graveyardClip'
                clipPathUnits='objectBoundingBox'
              >
                <path
                  d='M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526Z'
                  pathdata='M  0.883 0.543 C 0.869 0.667 0.733 0.731 0.634 0.779 0.514 0.839 0.363 0.898 0.246 0.832 0.174 0.792 0.129 0.688 0.117 0.595 0.099 0.455 0.117 0.271 0.212 0.183 0.329 0.075 0.532 0.023 0.658 0.168 0.752 0.275 0.901 0.392 0.883 0.543 Z;M 0.929 0.526C 0.913 0.667 0.83 0.824 0.715 0.871 0.59 0.922 0.452 0.813 0.333 0.744 0.235 0.688 0.106 0.636  0.071 0.515 0.037 0.399 0.072 0.236 0.154 0.159 0.323 0.001 0.623 0.00 0.803 0.129 0.904 0.207 0.946 0.386 0.929  0.526 Z;M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526 Z'
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            className='hide'
            xmlns='http://www.w3.org/2000/svg'
            style={styles.svgStyles}
            ref='d_construction'
            id='d_construction'
            preserveAspectRatio='none'
            viewBox='0 0 1 1'
            overflow='visible'
          >
            <defs>
              <clipPath
                id='d_constructionClip'
                clipPathUnits='objectBoundingBox'
                style={styles.defStyles}
              >
                <path
                  d='M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526Z'
                  pathdata='M  0.883 0.543 C 0.869 0.667 0.733 0.731 0.634 0.779 0.514 0.839 0.363 0.898 0.246 0.832 0.174 0.792 0.129 0.688 0.117 0.595 0.099 0.455 0.117 0.271 0.212 0.183 0.329 0.075 0.532 0.023 0.658 0.168 0.752 0.275 0.901 0.392 0.883 0.543 Z;M 0.929 0.526C 0.913 0.667 0.83 0.824 0.715 0.871 0.59 0.922 0.452 0.813 0.333 0.744 0.235 0.688 0.106 0.636  0.071 0.515 0.037 0.399 0.072 0.236 0.154 0.159 0.323 0.001 0.623 0.00 0.803 0.129 0.904 0.207 0.946 0.386 0.929  0.526 Z;M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526 Z'
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className='hide'
            xmlns='http://www.w3.org/2000/svg'
            style={styles.svgStyles}
            ref='artist_portfolio'
            id='artist_portfolio'
            preserveAspectRatio='none'
            viewBox='0 0 1 1'
            overflow='visible'
          >
            <defs>
              <clipPath
                id='artist_portfolioClip'
                clipPathUnits='objectBoundingBox'
                style={styles.defStyles}
              >
                <path
                  d='M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526Z'
                  pathdata='M  0.883 0.543 C 0.869 0.667 0.733 0.731 0.634 0.779 0.514 0.839 0.363 0.898 0.246 0.832 0.174 0.792 0.129 0.688 0.117 0.595 0.099 0.455 0.117 0.271 0.212 0.183 0.329 0.075 0.532 0.023 0.658 0.168 0.752 0.275 0.901 0.392 0.883 0.543 Z;M 0.929 0.526C 0.913 0.667 0.83 0.824 0.715 0.871 0.59 0.922 0.452 0.813 0.333 0.744 0.235 0.688 0.106 0.636  0.071 0.515 0.037 0.399 0.072 0.236 0.154 0.159 0.323 0.001 0.623 0.00 0.803 0.129 0.904 0.207 0.946 0.386 0.929  0.526 Z;M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526 Z'
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    )
  }
}
