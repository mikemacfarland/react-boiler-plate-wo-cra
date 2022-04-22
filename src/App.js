import React from 'react'
import images from './assets/images.js'

const App = ()=>{
    const imgStyle = {
        height: 100,
        width: 100,
    }

    return(
        <div>
            <p>this is the app</p>
            <div style={imgStyle}>this is an svg<img src={images.cogLogo} alt="" /></div>
            <div >this is a jpg<img style={imgStyle} src={images.livingRoom}/>
            </div>
            <div className='cssStyled'>this is a div styled with CSS</div>
        </div>
    )
}

export default App