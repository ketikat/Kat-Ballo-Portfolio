import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

// couldn't find suitable npm library to use as a grid component... so had to used 'reactrpg' npm module as template & modified it...
function Grid(props) {
    const imagesArray = props.imagesArray
    const padding = props.padding || 3
    const columns = props.columns || [3, 2, 1]
    const clickHandler = props.clickHandler
    const paddingBottom= props.paddingBottom || '100%'
    const imgFitting= props.imgFitting || 'cover'
    const link= props.link

    // styles helper
    const cssBreakpoints = {
      Main: '' + Math.floor(100 / columns[0]) + '%;',
      width480: '' + Math.floor(100 / columns[1]) + '%;',
      width992: '' + Math.floor(100 / columns[2]) + '%;',
    }

    // images to show in photo grid
    const imageNodes = imagesArray.map( (img, index) => {
      return (
              <GridImage
                key={index}
                url={img.url}
                link={img.link}
                index={index}
                columns={columns}
                padding={padding}
                clickHandler={clickHandler}
                imgFitting={imgFitting}
                paddingBottom={paddingBottom}
              />
      )
    })

  return (
          <div className='imageGrid'>
            {imageNodes}
            <style dangerouslySetInnerHTML={{__html: `
                .imageGridItem {
                  width: ${cssBreakpoints.Main}
                },
                @media only screen and (min-width : 480px)
                .imageGridItem {
                  width: ${cssBreakpoints.width480}
                },
                @media only screen and (min-width : 992px)
                .imageGridItem {
                  width: ${cssBreakpoints.width992}
                }
            `}}/>
          </div>
  )
}


function GridImage (props) {

  const {  link, url, index, padding, imgFitting, paddingBottom, clickHandler, clickParam } = props

// styles
  const styles = {
    imageGridItem: {
      display: 'inline-block',
      boxSizing: 'border-box',
      float: 'left',
      padding: padding
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      paddingBottom: `${paddingBottom}`,
      backgroundImage: 'url(' + url + ')',
      backgroundSize: `${imgFitting}`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      cursor: 'pointer'
    }
  }
  const clickType = link? link : index

  return(
        <div className='imageGridItem' style={styles.imageGridItem}>
          <a  onClick={()=>clickHandler(clickType)}>
            <div  className='imageWrapper' style={styles.imageWrapper}>
            </div>
          </a>
        </div>
  )

}

// export default Grid
export default withRouter(Grid)
